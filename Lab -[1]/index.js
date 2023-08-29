"use strict";
/*_____________problem 1___________
let max;
for (let i = 0; i < 3; i++) {
  let val = +prompt(`enter value num${i + 1}`);
  if (i == 0) max = val;
  if (val > max) max = val;
}
console.log(max);
*/
/*_____________problem 2 __________
let val;
do {
  val = +prompt(`enter a numeric month from 1>3 `);
} while (val < 1 || val > 3 || isNaN(val));

switch (val) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("something went wrong");
}
*/

/*_____________problem 3_________
let val;
do {
  val = +prompt(`enter a number to be checked `);
} while (isNaN(val));

if (val % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
*/

/*_____________problem 4___________ 
let val;
do {
  val = +prompt(`enter a number to be factorialed `);
} while (isNaN(val));

if (val === 0 || val === 1) {
  console.log(1);
} else {
  let fac = val;
  for (var i = val - 1; i >= 1; i--) {
    fac = fac * i;
  }
  console.log(fac);
}
*/

/*_____________problem 5___________ 

let a;
let b;
let operation;

do {
  a = +prompt(`enter a number 1 `);
  b = +prompt(`enter a number 2 `);
} while (!Number.isFinite(a) || !Number.isFinite(b));

do {
  operation = +prompt(
    `enter a number a operation name\n
    1-addition\n
    2-subtraction\n
    3-multiplication\n
    4-division  `
  );
} while (isNaN(operation) || operation < 1 || operation > 4);

switch (operation) {
  case 1:
    console.log(a + b);
    break;
  case 2:
    console.log(a - b);
    break;
  case 3:
    console.log(a * b);
    break;
  case 4:
    console.log(a / b);
    break;
  default:
    console.log("something went wrong");
}
*/

/* ____________problem 5 onther way to switch
let a;
let b;
let operation;

do {
  a = +prompt(`enter a number 1 `);
  b = +prompt(`enter a number 2 `);
} while (!Number.isFinite(a) || !Number.isFinite(b));

do {
  operation = prompt(
    `enter a number a operation name\n
    1-addition\n
    2-subtraction\n
    3-multiplication\n
    4-division  `
  );
} while (
  operation != "+" &&
  operation != "/" &&
  operation != "*" &&
  operation != "-"
);

switch (operation) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("something went wrong");
}
*/

/*____________ problem 6 ___________
let sum = 0;
let num;
do {
  num = +prompt(`Enter a value (enter 0 to stop): `);
  sum = sum + num;
  if (sum <= 100) console.log(sum);
} while (num > 0 && sum < 100 && !isNaN(num));
*/
