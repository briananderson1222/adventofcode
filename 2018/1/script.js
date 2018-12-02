const readline = require('readline');
const fs = require('fs');

let frequency = 0;
let frequencyMap = {};
let done = false;
(function readInput() {
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    if (done) return;
    try {
      const input = parseInt(line);
      frequency += input;
      if (frequencyMap[frequency]){
        done = true;
        rl.close();
      }
      frequencyMap[frequency] = true;
    } catch (e) {
      console.error(e);
    }
  });

  rl.on('close', () => {
    if (done) {
      console.log("The answer is", frequency);
    } else {
      readInput();
    }
  });
})();
