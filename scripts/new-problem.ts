

import { default as fs } from 'node:fs'
const problemNumber = process.argv[2];
const problemName = process.argv[3];

if (!problemName || !problemNumber) {
  console.error('Please provide both a problem number and a problem name.');
  process.exit(1);
}
const fileName = `./${problemName}/${problemName}`;

// create directory
fs.mkdirSync(`./${problemName}`, { recursive: true });
// create solution file
fs.writeFileSync(`${fileName}.ts`, `// Solution for ${problemName}\n\nfunction solution() {\n  // TODO: Implement the solution\n}\n\nexport default solution;\n`);
// create test file
fs.writeFileSync(`${fileName}.test.ts`, `// Test for ${problemName}\n\nimport { describe, it } from 'vitest';\nimport solution from './${problemName}';\n\ndescribe('${problemName}', () => {\n  it('should work', () => {\n    // TODO: Implement the test\n  });\n});\n`);
// create README file$
fs.writeFileSync(`${fileName}.${problemNumber}.md`, `# ${problemName}\n\n## Problem Description\n\nTODO: Add problem description here.\n\n## Solution\n\nTODO: Add solution description here.\n`);
