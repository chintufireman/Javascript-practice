const PromptSync = require("prompt-sync");

const prompt = new PromptSync({ sigint: true });
process.stdin.resume();
process.stdin.setEncoding("utf8");

const age = prompt("What is your age? ");
const num = Number.parseInt(age);
if(num > 0)
    console.log(`Hello your age is, ${age}!`, num>18?"You can drive car" : "dont drive");

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", name => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

 */