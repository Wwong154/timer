const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("\n Thanks for using me, ciao!")
    process.exit();
  }  
  if (key === 'b') {
    process.stdout.write('beep! '); // because my beep sound doesn't work
  }  
  if (!isNaN(key) && key > 0) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {process.stdout.write('beep! ')}, key * 1000);
  }
});