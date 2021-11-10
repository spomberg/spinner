const characters = "|/-\\|/-\\";
let delay = 100;

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}