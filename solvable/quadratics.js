//packages
const readline = require("readline-sync");
const katex = require("katex");
const launcher = require("../launch.js");

var maths = async function quadra() {
  console.log(
    "Enter the values of a, b and c following the format: ax^2 + bx + c = 0"
  );

  const a = parseInt(readline.question("a: "));
  if (a == 0) {
    console.log("a cannot be 0");
    return;
  }
  const b = parseInt(readline.question("b: "));
  const c = parseInt(readline.question("c: "));
  var discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    console.log(`No real roots because the discriminant is ${discriminant}!`);
    return;
  } else if (discriminant == 0) {
    var x = -(-b / 2) * a;
    launcher.launch(
      "The solutions to the equation <br>" +
        katex.renderToString(`${a}x^2 + ${b}x + ${c} = 0`) +
        `<br> is ${katex.renderToString(
          `x = ${x}`
        )} <br> and it can be found trough factorisation: <br> ${katex.renderToString(
          `(x - ${x})^2 = 0`
        )}`,
      "false",
      "false",
      "false",
      "false",
      "false"
    );
    return;
  } else {
    if (Number.isInteger(Math.sqrt(discriminant))) {
      var x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
      var x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
      launcher.launch(
        "The solutions to the equation <br>" +
          katex.renderToString(`${a}x^2 + ${b}x + ${c} = 0`) +
          `<br> are ${katex.renderToString(
            `x = ${x1}`
          )} and ${katex.renderToString(
            `x = ${x2}`
          )} <br> and they can be found trough factorisation: <br> ${katex.renderToString(
            `(x - ${x1})^2 = 0`.replace("- -", "+")
          )} and ${katex.renderToString(
            `(x - ${x2})^2 = 0`.replace("- -", "+")
          )}`,
        "false",
        "false",
        "false",
        "false",
        "false"
      );
    } else {
      var x1 = `(-${b} - \\sqrt${discriminant}) / ${2 * a}`;
      var x2 = `(-${b} + \\sqrt${discriminant}) / ${2 * a}`;
      launcher.launch(
        "The solutions to the equation <br>" +
          katex.renderToString(`${a}x^2 + ${b}x + ${c} = 0`) +
          `<br> are ${katex.renderToString(
            `x = ${x1} = ${(
              (-b - Math.sqrt(discriminant)) /
              (2 * a)
            ).toPrecision(3)}`
          )} and ${katex.renderToString(
            `x = ${x2} = ${(
              (-b + Math.sqrt(discriminant)) /
              (2 * a)
            ).toPrecision(3)}`
          )} <br> and they can be found trough graphing using GDC.`,
        "true",
        `${a}x^2 + ${b}x + ${c}`,
        ((-b - Math.sqrt(discriminant)) / (2 * a)).toPrecision(3),
        ((-b + Math.sqrt(discriminant)) / (2 * a)).toPrecision(3)
      );
    }
    return;
  }
};

module.exports.maths = maths;
