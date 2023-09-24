// function requestData(URL, Method = "GET") {
//   let isPending = true;
//   let DATA;
//   let xhr = new XMLHttpRequest(); //The constructor has no arguments.
//   xhr.open("GET", URL, true);
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status != 200) {
//       isPending = false;
//       alert("something went worng ");
//     } else {
//       DATA = JSON.parse(xhr.response);
//       isPending = false;
//       console.log(DATA);
//       return { DATA, isPending };
//     }
//   };
//   xhr.onprogress = () => {
//     isPending = true;
//   };
//   xhr.onerror = () => {
//     isPending = false;
//     console.log("your request did't send");
//   };
// }
// const result = requestData("https://jsonplaceholder.typicode.com/todos/");
// console.log("result", result);

const container = document.querySelector(".todos");

let isPending = true;
function requestData(URL, Method = "GET") {
  let xhr = new XMLHttpRequest(); //The constructor has no arguments.
  xhr.open("GET", URL, true);
  xhr.send();
  return xhr;
}
const reqAllTodos = requestData("https://jsonplaceholder.typicode.com/todos/");
reqAllTodos.addEventListener("load", waitTheResponse);
function waitTheResponse() {
  if (this.status != 200) {
    isPending = false;
    alert("something went worng ");
  } else {
    DATA = JSON.parse(this.response);
    console.log(DATA[0]);
    isPending = false;
    DATA.forEach((todo) => {
      const HTML = ` <div class="todo ${
        todo.completed ? "complete" : "pending"
      }">
          <span>${todo.title}</span> 
          <a href="./deatils.html?id=${todo.id}">See More ..</a>
        </div>`;

      container.insertAdjacentHTML("beforeend", HTML);
    });
  }
  this.onprogress = () => {
    isPending = true;
  };
  this.onerror = () => {
    isPending = false;
    console.log("your request did't send");
  };
}

const FORMM = document.querySelector("form");
const Done = document.querySelector(".done");
const noDone = document.querySelector(".notdone");
let SearchTerm;
FORMM.addEventListener("submit", (e) => {
  e.preventDefault();
  var value = document.getElementsByName("STATUS");
  const allCompleted = document.querySelectorAll(".pending");
  const allPending = document.querySelectorAll(".complete");
  for (var radio of value) {
    if (radio.checked) {
      SearchTerm = radio.value;
      if (SearchTerm === "complete") {
        console.log("compelete clicked");
        allPending.forEach((el) => {
          el.setAttribute("hidden", "");
        });
        allCompleted.forEach((el) => {
          el.removeAttribute("hidden");
        });
      }
      if (SearchTerm === "onProgress") {
        console.log("compelete clicked");
        allCompleted.forEach((el) => {
          el.setAttribute("hidden", "");
        });
        allPending.forEach((el) => {
          el.removeAttribute("hidden");
        });
      }
    }
  }
});
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  const todosss = document.querySelectorAll(".todo");
  todosss.forEach((e) => {
    e.removeAttribute("hidden");
  });
});
