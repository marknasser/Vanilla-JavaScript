/*problem 1 */
// let GRN = () => Math.floor(Math.random() * 6) + 1;
// let permition = true;

// do {
//   const res = confirm("do u want to creat random 1-6 ?");
//   permition = res;
//   if (permition) {
//     alert(GRN());
//   }
// } while (permition);

/*problem 2

const deepCopy = (ar) => {
  let condition = true;
  let result = [];
  for (let i = 0; i < ar.length; i++) {
    if (!isNaN(+ar[i]) || ar[i] === null) {
      console.log("//number/space/null");
      condition = false;
      break;
    } else {
      condition = true;
    }
  }

  if (condition) {
    for (let i = 0; i < ar.length; i++) {
      result[i] = ar[i].toLowerCase().trim();
      const deep = JSON.parse(JSON.stringify(ar));
    }
    return result;
  } else {
    alert("inputs are wrong");
  }
};

let original = ["asasdasasd   ", "   aSDSDSDSDsd"];
const newArray = deepCopy(original);
console.log(newArray);
*/

/*problem 3 
let counter = 0;
const Quiz = [
  { ask: "what is today ?", answer: "sunday" },
  { ask: "do you think iam smart?", answer: "no" },
];

for (let i = 0; i < Quiz.length; i++) {
  let answer;

  do {
    answer = prompt(Quiz[i]["ask"]);
    if (answer !== null) {
      if (answer.trim() !== Quiz[i]["answer"]) {
        alert(`wrong answer`);
      } else {
        counter++;
      }
    }
  } while (!isNaN(+answer) || answer === null);
}
console.log(counter);
*/

/*problem 4  

const Tasks = [];
let task;
let isClose = false;
let isDuplicated = false;

do {
  task = prompt("entar a task name");
  if (
    task === null ||
    task.trim() === null ||
    task.trim() === "" ||
    parseInt(task.trim())
  ) {
    isClose = true;
  } else {
    for (let i = 0; i < Tasks.length; i++) {
      Tasks[i]["name"] === task.trim().toLowerCase()
        ? (isDuplicated = true)
        : (isDuplicated = false);
    }
    isClose = false;
    if (isDuplicated) {
      alert("duplicated task");
    } else {
      Tasks.push({ name: task.trim().toLowerCase(), status: false });
    }
  }
} while ((!isNaN(+task) && task !== null) || !isClose || isDuplicated);
console.log(Tasks);

let done;
isClose = false;
do {
  done = prompt("entar a done task name");
  if (done === null) {
    isClose = true;
  } else {
    isClose = false;
    for (let i = 0; i < Tasks.length; i++) {
      if (Tasks[i]["name"] === done.trim().toLowerCase()) {
        if (Tasks[i]["status"] === true) {
          alert("task is already done !");
          break;
        } else {
          Tasks[i]["status"] = true;
          break;
        }
      }
    }
  }
} while ((!isNaN(+done) && done !== null) || !isClose);

console.log(Tasks);
*/
/*problem 5
const message = prompt("entar a done task name");
for (let i = 0; i < 5; i++) {
  const el = document.createElement(`h${i + 1}`);
  el.textContent = message;
  document.body.append(el);
}
*/
