import fs from 'node:fs';

// Read a UTF-8 text file with line endings normalised to LF. A Windows
// checkout with core.autocrlf=true has CRLF files; every parser here
// splits on '\n' and matches '---\n', so CRLF must not reach them.
export function readText(p) {
  return fs.readFileSync(p, 'utf8').replace(/\r\n?/g, '\n');
}
