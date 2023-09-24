const h11 = document.querySelector("h1");
const statusC = document.querySelector(".status");
const idd = document.querySelector(".idd");
const details = document.querySelector("p");

const searchParams = new URLSearchParams(window.location.search);
const search = searchParams.get("id");

let isPending = true;
function requestData(URL) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  xhr.send();
  return xhr;
}
const reqAllTodos = requestData(
  `https://jsonplaceholder.typicode.com/todos/${search}`
);
reqAllTodos.addEventListener("load", waitTheResponse);
function waitTheResponse() {
  if (this.status != 200) {
    isPending = false;
    alert("something went worng ");
  } else {
    DATA = JSON.parse(this.response);
    isPending = false;
    console.log(DATA);
    statusC.textContent = DATA.completed ? "done" : "onProgress";
    idd.textContent = DATA.id;
    details.textContent = DATA.title;
  }
  this.onprogress = () => {
    isPending = true;
  };
  this.onerror = () => {
    isPending = false;
    console.log("your request did't send");
  };
}
