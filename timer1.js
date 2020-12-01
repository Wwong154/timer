'use strict';

let args = process.argv.slice(2).filter(a => !isNaN(a) && a > 0);
if (!args.length) return;
let max = args.reduce((a,b) => Math.max(a, b));

for (const time of args) {
  setTimeout(() => process.stdout.write('. '), time * 1000);
}
setTimeout(() => process.stdout.write('\n'), max * 1000 + 100);