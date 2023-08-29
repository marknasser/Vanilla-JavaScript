/* propblem 1 
var names = [];
var searchTerm;
for (var i = 0; i < 5; i++) {
  var name;
  var isExisted = true;
  do {
    name = prompt(`enter name ${i + 1}`);
    if (name !== null) {
      name = name.trim().replaceAll(" ", "");
    }
    isExisted = names.includes(name);
    if (!isExisted) {
      names[i] = name;
    }
  } while (
    !isNaN(searchTerm) ||
    name === null ||
    parseInt(name) ||
    name.length === 0 ||
    isExisted
  );
}

do {
  searchTerm = prompt(`enter search name`);
  if (searchTerm !== null) {
      searchTerm = searchTerm.trim().replaceAll(" ", "");
    }
} while (
  !isNaN(searchTerm) ||
  searchTerm === null ||
  parseInt(searchTerm) ||
  searchTerm.length === 0
);

var result = names[names.indexOf(searchTerm)];
if (result) {
  alert(`the elemnt is number ${names.indexOf(searchTerm) + 1}`);
} else {
  alert("not found");
}
// var str = names.toString();
// var start = str.search(searchTerm);
// var resultLength = str.substring(start, string.indexOf("@"));
*/
/* problem 2

var str;
var wordCounter = 0;
do {
  str = prompt(`enter a string`);
} while (!isNaN(str) || str === null || parseInt(str) || str.length === 0);
var arrSTR = str.split(" ");
for (var i = 0; i < arrSTR.length; i++) {
  if (arrSTR[i] !== "") {
    wordCounter++;
  }
}
alert(`the number of words is: ${wordCounter}`);
*/

/* problem 3  
var str;
var char;
var arrtwoChar = [];

do {
  str = prompt(`enter a string`);
} while (!isNaN(str) || str === null || parseInt(str) || str.length === 0);
console.log(str);

for (var i = 0; i < 2; i++) {
  do {
    char = prompt(`enter a char num : ${i + 1}`);
    if (char !== null) {
      arrtwoChar[i] = char.trim().replaceAll(" ", "");
    }
  } while (
    !isNaN(arrtwoChar[i]) ||
    char === null ||
    parseInt(arrtwoChar[i]) ||
    arrtwoChar[i].length === 0 ||
    arrtwoChar[i].length > 1
  );
}

var firstInd = str.indexOf(arrtwoChar[0]);
var secInd = str.indexOf(arrtwoChar[1]);

if (firstInd && secInd) {
  var resultLength = str.substring(firstInd + 1, secInd);
  alert(resultLength);
} else {
  alert("the character does not exist.");
}
*/

/* problem 4
var str;
var counter = 0;
var vowels = ["a", "e", "o", "u", "i"];

do {
  str = prompt(`enter a string`);
  if (str !== null) {
    str = str.trim().replaceAll(" ", "");
  }
} while (!isNaN(str) || str === null || parseInt(str) || str.length === 0);
var arr = str.split("");

for (var i = 0; i < arr.length; i++) {
  for (var z = 0; z < vowels.length; z++) {
    if (arr[i] === vowels[z]) {
      counter++;
    }
  }
}
alert(`The nummbers of vowels ${counter}`);
*/

/* problem 5 
var names = [];
var salaries = [];
var str1;
var str2;
var maxSalary;
var maxSalaryIndex;
var searchTerm;
var searchTermIndex;

var isheEntersAnum = false;
var isheEntersAchar = false;
do {
  str1 = prompt(`enter names of employees in a comma separated`);
  if (str1 !== null) {
    str1 = str1.trim().replaceAll(" ", "");
    names = str1.split(",");
    for (var i = 0; i < names.length; i++) {
      if (!isNaN(+names[i])) {
        isheEntersAnum = true;
        break;
      } else {
        isheEntersAnum = false;
      }
    }
  }
} while (
  !isNaN(str1) ||
  str1 === null ||
  parseInt(str1) ||
  str1.length === 0 ||
  isheEntersAnum
);

console.log(str1);
do {
  str2 = prompt(`enter the salaries of the employees in a comma separated`);
  if (str2 !== null) {
    str2 = str2.trim().replaceAll(" ", "");
    salaries = str2.split(",");
    for (var i = 0; i < salaries.length; i++) {
      if (isNaN(+salaries[i])) {
        console.log("number");
        isheEntersAchar = true;
        break;
      } else {
        isheEntersAchar = false;
      }
    }
  }
} while (str2 === null || str2.length === 0 || isheEntersAchar);

if (names.length !== salaries.length) {
  alert("number of employee names does not match the number of salaries");
} else {
  for (var i = 0; i < names.length; i++) {
    alert(`Name: ${names[i]} , Salary ${salaries[i]}`);
  }

  for (var i = 0; i < salaries.length; i++) {
    if (i == 0) {
      maxSalary = +salaries[i];
      maxSalaryIndex = i;
    }
    if (salaries[i] > maxSalary) {
      maxSalary = +salaries[i];
      maxSalaryIndex = i;
    }
  }
  alert(`the higthes salary is ${names[maxSalaryIndex]} : ${maxSalary}`);
  do {
    searchTerm = prompt(`insert a name of an employee`);
  } while (
    !isNaN(searchTerm) ||
    searchTerm === null ||
    parseInt(searchTerm) ||
    searchTerm.length === 0
  );

  searchTermIndex = names.indexOf(searchTerm);

  if (names.includes(searchTerm)) {
    alert(`${searchTerm} : ${salaries[searchTermIndex]}`);
    console.log(names[searchTermIndex]);
  }
}
*/
