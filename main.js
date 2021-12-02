//packages
const readline = require("readline-sync");
const fs = require("fs");

//Load
var solvables = [];
fs.readdirSync("solvable").forEach((file) => {
  solvables.push(file.slice(0, -3));
});
var repeat = true;

//Prompt user for input
while (repeat) {
  main();
}

async function main() {
  var userInput = readline
    .question("Enter maths question: ")
    .toLowerCase()
    .split(" ");
  if (userInput.length > 1) {
    console.log("Please enter a single word");
  } else if (userInput[0] === "help") {
    console.log("Usage: node main.js <maths question>");
    console.log("Current solvable questions: ");
    solvables.forEach((solvable) => {
      console.log(solvable);
    });
  } else if (solvables.includes(userInput[0])) {
    var program = require("./solvable/" + userInput[0] + ".js");
    repeat = false;
    await program.maths();
  } else {
    console.log(`Currently, I cannot solve the question ${userInput[0]}`);
  }
}
