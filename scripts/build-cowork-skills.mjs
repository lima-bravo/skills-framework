#!/usr/bin/env node
/**
 * Generate Agent Skills packages for Claude Cowork / Claude Code from Skills Reference/*.md.
 * Output: plugins/<plugin-id>/skills/<skill-slug>/SKILL.md (+ references/)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REF_DIR = path.join(ROOT, 'Skills Reference');
const MANIFEST_PATH = path.join(REF_DIR, 'skills-manifest.json');
const CONFIG_PATH = path.join(__dirname, 'cowork-skills.config.json');
const OUT_ROOT = path.join(ROOT, 'plugins');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function slugFromFile(file) {
  return path.basename(file, '.md').replace(/_/g, '-');
}

function stripDeckFooter(md) {
  return md.replace(/\n\*Part of[\s\S]*$/i, '').trim();
}

function parseSections(md) {
  let text = stripDeckFooter(md);
  const firstH2 = text.search(/^## /m);
  if (firstH2 >= 0) text = text.slice(firstH2);

  const sections = [];
  for (const chunk of text.split(/\n(?=## )/)) {
    const m = chunk.match(/^## ([^\n]+)\n([\s\S]*)/);
    if (!m) continue;
    const title = m[1].trim();
    const body = m[2]
      .replace(/^---\s*$/gm, '')
      .replace(/\n---\s*$/g, '')
      .trim();
    if (body) sections.push({ title, body });
  }
  return sections;
}

function parseChainSteps(md) {
  return parseSections(md).filter((s) => /^Step \d+/i.test(s.title));
}

function sectionByTitle(sections, ...names) {
  for (const name of names) {
    const found = sections.find(
      (s) => s.title.toLowerCase() === name.toLowerCase(),
    );
    if (found) return found.body;
  }
  return '';
}

function yamlQuote(s) {
  const t = String(s ?? '').replace(/\r/g, '').trim();
  if (t.includes('\n') || t.includes('"') || t.includes("'")) {
    return `|\n  ${t.replace(/\n/g, '\n  ')}`;
  }
  return JSON.stringify(t);
}

function frontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'object' && !Array.isArray(v)) {
      lines.push(`${k}:`);
      for (const [mk, mv] of Object.entries(v)) {
        lines.push(`  ${mk}: ${yamlQuote(mv)}`);
      }
    } else if (typeof v === 'boolean') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: ${yamlQuote(v)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content, 'utf8');
}

function copyReference(sourceFile, skillDir) {
  const src = path.join(REF_DIR, sourceFile);
  if (!fs.existsSync(src)) {
    console.warn(`  warn: missing reference ${sourceFile}`);
    return null;
  }
  const slug = slugFromFile(sourceFile);
  const dest = path.join(skillDir, 'references', `${slug}.md`);
  const md = stripDeckFooter(fs.readFileSync(src, 'utf8'));
  writeFile(dest, md);
  return `references/${slug}.md`;
}

function buildToolkitBody(toolkit, manifest) {
  const lines = [];
  lines.push(`# ${titleCase(toolkit.slug)}`);
  lines.push('');
  lines.push(
    'Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.',
  );
  lines.push('');

  if (toolkit.branches?.length) {
    lines.push('## Choose a branch');
    lines.push('');
    lines.push('Pick the branch that best matches the situation, then apply its models:');
    lines.push('');
    for (const b of toolkit.branches) {
      lines.push(`- **${b.label}** — ${b.models.join(', ')}`);
    }
    lines.push('');
  }

  lines.push('## Protocol');
  lines.push('');
  let step = 1;
  for (const source of toolkit.sources) {
    const srcPath = path.join(REF_DIR, source);
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Toolkit ${toolkit.slug}: missing source ${source}`);
    }
    const md = fs.readFileSync(srcPath, 'utf8');
    const sections = parseSections(md);
    const meta = Object.entries(manifest.skills).find(([f]) => f === source)?.[1];
    const label = meta?.name ?? slugFromFile(source);

    lines.push(`### ${step}. ${label}`);
    step += 1;

    const mental = sectionByTitle(sections, 'Mental Model');
    if (mental) {
      lines.push('');
      lines.push('**Hold in mind:**');
      lines.push(mental.split('\n').slice(0, 6).join('\n'));
    }

    const heuristics = sectionByTitle(sections, 'Practitioner Heuristics');
    if (heuristics) {
      lines.push('');
      lines.push('**Do:**');
      lines.push(heuristics);
    }

    const failures = sectionByTitle(sections, 'Common Failure Modes');
    if (failures) {
      lines.push('');
      lines.push('**Avoid:**');
      lines.push(failures);
    }
    lines.push('');
  }

  lines.push('## Deliverable format');
  lines.push('');
  lines.push('Produce a markdown document with these sections:');
  lines.push('');
  for (const sec of toolkit.deliverableSections ?? []) {
    lines.push(`### ${sec}`);
    lines.push('');
  }

  // Note: the "## Reference cards" section (with links) is appended in main()
  // after references are copied. Do not emit it here, or it duplicates.

  return lines.join('\n');
}

function titleCase(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildChainBody(chainFile, displayName, steps) {
  const lines = [];
  lines.push(`# ${displayName}`);
  lines.push('');
  lines.push(
    'Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.',
  );
  lines.push('');
  lines.push('## Before you start');
  lines.push('');
  lines.push('- Confirm the decision or improvement scope in one sentence.');
  lines.push('- List what evidence is already available vs. what must be gathered.');
  lines.push('- State the stakeholder and time horizon.');
  lines.push('');
  lines.push('## Workflow');
  lines.push('');

  for (const step of steps) {
    lines.push(`### ${step.title}`);
    lines.push('');
    lines.push(step.body);
    lines.push('');
  }

  const failureSection = parseSections(fs.readFileSync(path.join(REF_DIR, chainFile), 'utf8')).find(
    (s) => /failure modes/i.test(s.title) || /key failure/i.test(s.body.slice(0, 80)),
  );
  if (failureSection && /failure modes/i.test(failureSection.body)) {
    lines.push('## Guardrails');
    lines.push('');
    lines.push(failureSection.body);
    lines.push('');
  }

  lines.push('## Final deliverable');
  lines.push('');
  lines.push('Synthesize all steps into:');
  lines.push('');
  lines.push('1. **Executive summary** (answer / recommendation first)');
  lines.push('2. **Key findings** (one per major step)');
  lines.push('3. **Risks and failure modes** still open');
  lines.push('4. **Next actions** with owners and dates');
  lines.push('');
  lines.push(`Full source card: [references/source.md](references/source.md)`);
  lines.push('');

  return lines.join('\n');
}

function buildRouterBody(config) {
  const pluginSkills = new Map();
  for (const p of config.plugins) {
    for (const s of p.skills) {
      pluginSkills.set(s, p.id);
    }
  }

  const lines = [];
  lines.push('# Classify consulting task');
  lines.push('');
  lines.push(
    'Identify the user’s primary task type, then invoke the best matching skill (slash command or explicit load). Do not run every skill.',
  );
  lines.push('');
  lines.push('## Routing table');
  lines.push('');
  lines.push('| If the user needs… | Invoke |');
  lines.push('|---|---|');

  const routes = [
    // Delivery & Flow
    ['Slow delivery, flow, WIP, lead time, kanban', '/improve-delivery-flow or /diagnose-flow'],
    ['Org design, teams, dependencies, Conway', '/org-design-for-flow or /design-org-for-flow'],
    ['Capacity or portfolio load planning', '/capacity-planning'],
    ['Large organizational change', '/transformation'],
    ['Prioritization under scarce capacity', '/prioritize-under-scarcity'],
    ['Metrics, forecasting, predictability', '/measure-delivery'],
    ['WIP limits or commitments', '/set-wip-and-commitments'],
    ['Define what work is needed to build or deliver (outcome, scope, work tree)', '/work-to-be-done'],
    // Disciplined Thinking
    ['Pricing or monetization', '/pricing-decision'],
    ['Market entry', '/market-entry'],
    ['Hiring', '/hiring-decision'],
    ['Product or feature launch', '/product-launch'],
    ['Investment or capital allocation', '/investment-decision'],
    ['Quit or stay decision', '/should-i-quit'],
    ['Major life decision', '/life-decision'],
    ['General ambiguous decision', '/apply-core-mental-models'],
    // Consulting Craft
    ['Executive problem structure / issue tree', '/structure-executive-problem'],
    ['Executive memo or deck narrative', '/executive-communication'],
    ['Engagement scope or SOW', '/consulting-engagement'],
    // Innovation Strategy
    ['Understanding a customer problem, JTBD, or unmet need', '/understand-the-problem'],
    ['Validating a solution, running an experiment, MVP, or pretotype', '/test-and-validate'],
    ['Innovation portfolio, Three Horizons, or programme health', '/manage-innovation-portfolio'],
    ['Diagnosing or designing an innovation capability', '/innovation-capability-diagnostic or /design-launch-innovation-program'],
    ['Turning an idea into a testable hypothesis', '/from-idea-to-hypothesis'],
    ['Staging a new initiative through evidence gates', '/crawl-walk-run'],
    // Applied AI
    ['AI agent governance, authority levels, or override protocols', '/ai-agent-governance-design'],
    ['AI use case autonomy assessment or human-in-loop design', '/ai-use-case-autonomy-assessment'],
    ['AI scope, authority boundaries, or prompt injection risks', '/ai-governance'],
    // Leadership
    ["Mission execution, commander's intent, or delegation", '/mission-command-toolkit or /mission-execution-protocol'],
    ['After-action review, debrief, or learning from an event', '/after-action-toolkit'],
  ];

  for (const [when, skill] of routes) {
    lines.push(`| ${when} | ${skill} |`);
  }

  lines.push('');
  lines.push('## Output');
  lines.push('');
  lines.push('Reply with:');
  lines.push('');
  lines.push('1. **Task type** (one line)');
  lines.push('2. **Recommended skill** (exact slash name)');
  lines.push('3. **Why** (two sentences)');
  lines.push('4. **First question** to ask the user before running that skill');
  lines.push('');

  return lines.join('\n');
}

function writeSkill(pluginId, slug, fm, body, referenceFiles = []) {
  const skillDir = path.join(OUT_ROOT, pluginId, 'skills', slug);
  const refPaths = [];

  for (const file of referenceFiles) {
    const rp = copyReference(file, skillDir);
    if (rp) refPaths.push(rp);
  }

  if (refPaths.length && !body.includes('## Reference cards')) {
    body += '\n## Reference cards\n\n';
    for (const rp of refPaths) {
      const name = path.basename(rp, '.md');
      body += `- [${name}](${rp})\n`;
    }
    body += '\n';
  }

  writeFile(path.join(skillDir, 'SKILL.md'), `${frontmatter(fm)}\n\n${body}`);
  return skillDir;
}

function writeChainSourceRef(chainFile, skillDir) {
  const src = path.join(REF_DIR, chainFile);
  const md = stripDeckFooter(fs.readFileSync(src, 'utf8'));
  writeFile(path.join(skillDir, 'references', 'source.md'), md);
}

function main() {
  const config = readJson(CONFIG_PATH);
  const manifest = readJson(MANIFEST_PATH);

  if (fs.existsSync(OUT_ROOT)) {
    fs.rmSync(OUT_ROOT, { recursive: true });
  }

  const skillToPlugin = new Map();
  for (const plugin of config.plugins) {
    for (const slug of plugin.skills) {
      skillToPlugin.set(slug, plugin.id);
    }
  }

  const chainFiles = Object.entries(manifest.skills)
    .filter(([, m]) => m.category === 'Pre-built Chains')
    .map(([file, meta]) => ({ file, meta, slug: slugFromFile(file) }));

  let chainCount = 0;
  for (const { file, meta, slug } of chainFiles) {
    const pluginId = skillToPlugin.get(slug);
    if (!pluginId) {
      console.warn(`warn: chain ${slug} not assigned to a plugin, skipping`);
      continue;
    }

    const md = fs.readFileSync(path.join(REF_DIR, file), 'utf8');
    const steps = parseChainSteps(md);
    const description =
      config.chainDescriptionOverrides?.[slug] ??
      `${meta.name} decision chain from the Skills Framework. Use for ${meta.name.toLowerCase()} situations.`;

    const fm = {
      name: slug,
      description,
      metadata: {
        'framework-source': file,
        plugin: pluginId,
        version: config.version,
        invocation: 'manual',
      },
    };

    let body = buildChainBody(file, meta.name, steps);
    body =
      `> **Invocation:** Run only when the user explicitly requests this chain (e.g. \`/${slug}\`) or a matching high-stakes decision. Do not auto-invoke for general questions.\n\n` +
      body;
    const skillDir = path.join(OUT_ROOT, pluginId, 'skills', slug);
    writeFile(path.join(skillDir, 'SKILL.md'), `${frontmatter(fm)}\n\n${body}`);
    writeChainSourceRef(file, skillDir);
    chainCount += 1;
  }

  let toolkitCount = 0;
  for (const toolkit of config.toolkits) {
    const pluginId = skillToPlugin.get(toolkit.slug);
    if (!pluginId) {
      console.warn(`warn: toolkit ${toolkit.slug} not in any plugin, skipping`);
      continue;
    }

    const fm = {
      name: toolkit.slug,
      description: toolkit.description,
      metadata: {
        plugin: pluginId,
        version: config.version,
        sources: toolkit.sources.join(','),
      },
    };

    let body = buildToolkitBody(toolkit, manifest);
    const skillDir = path.join(OUT_ROOT, pluginId, 'skills', toolkit.slug);
    ensureDir(skillDir);

    for (const source of toolkit.sources) {
      copyReference(source, skillDir);
    }

    body += '\n## Reference cards\n\nFor full definitions and examples, read the linked files when detail is needed:\n\n';
    for (const source of toolkit.sources) {
      const refSlug = slugFromFile(source);
      body += `- [${refSlug}](references/${refSlug}.md)\n`;
    }
    body += '\n';

    writeFile(path.join(skillDir, 'SKILL.md'), `${frontmatter(fm)}\n\n${body}`);
    toolkitCount += 1;
  }

  for (const router of config.routers) {
    const pluginId = skillToPlugin.get(router.slug);
    if (!pluginId) continue;

    const fm = {
      name: router.slug,
      description: router.description,
      metadata: { plugin: pluginId, version: config.version },
    };
    if (router.disableModelInvocation === true) {
      fm.metadata = { ...fm.metadata, invocation: 'manual' };
    }

    const body = buildRouterBody(config);
    writeFile(
      path.join(OUT_ROOT, pluginId, 'skills', router.slug, 'SKILL.md'),
      `${frontmatter(fm)}\n\n${body}`,
    );
  }

  for (const plugin of config.plugins) {
    const pluginDir = path.join(OUT_ROOT, plugin.id);
    const pluginMeta = {
      name: plugin.name,
      version: config.version,
      description: plugin.description,
      author: config.author,
    };
    writeFile(
      path.join(pluginDir, '.claude-plugin', 'plugin.json'),
      `${JSON.stringify(pluginMeta, null, 2)}\n`,
    );

    const skillNames = plugin.skills.filter((s) =>
      fs.existsSync(path.join(pluginDir, 'skills', s, 'SKILL.md')),
    );
    writeFile(
      path.join(pluginDir, 'README.md'),
      `# ${plugin.name}\n\nGenerated Cowork/Code plugin (${skillNames.length} skills).\n\n## Skills\n\n${skillNames.map((s) => `- \`${s}\``).join('\n')}\n\nInstall via Cowork **Customize → Plugins** (upload folder or marketplace).\n`,
    );
  }

  const summaryPath = path.join(OUT_ROOT, 'BUILD_SUMMARY.md');
  const totalSkills = fs
    .readdirSync(OUT_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== 'BUILD_SUMMARY.md')
    .reduce((acc, d) => {
      const skillsDir = path.join(OUT_ROOT, d.name, 'skills');
      if (!fs.existsSync(skillsDir)) return acc;
      return (
        acc +
        fs.readdirSync(skillsDir, { withFileTypes: true }).filter((x) => x.isDirectory())
          .length
      );
    }, 0);

  writeFile(
    summaryPath,
    `# Cowork build summary\n\n- Plugins: ${config.plugins.length}\n- Chains: ${chainCount}\n- Toolkits: ${toolkitCount}\n- Routers: ${config.routers.length}\n- Total skill directories: ${totalSkills}\n\nRegenerate: \`npm run build:cowork\`\n`,
  );

  console.log(
    `Cowork skills: ${config.plugins.length} plugins, ${chainCount} chains, ${toolkitCount} toolkits, ${config.routers.length} routers → ${OUT_ROOT}`,
  );
}

main();
