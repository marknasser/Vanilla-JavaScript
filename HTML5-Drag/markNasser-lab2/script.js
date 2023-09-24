// _____elemnts_____
const form = document.getElementById("form");
const container = document.getElementById("container");

const containers = document.querySelectorAll(".tasksSection"); //ul
const tasks = document.querySelectorAll(".task");
const data = JSON.parse(localStorage.getItem("data")) || [];

updateUI();
tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("isDragging");
    console.log("starttttt");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("isDragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragable = document.querySelector(".isDragging");
    const currentIndex = data.findIndex(
      (el) => el.id === dragable.getAttribute("data-id")
    );
    dragable.setAttribute("data-status", container.parentElement.className);
    data[currentIndex].status = container.parentElement.className;
    refreshLocalStorage();
    container.appendChild(dragable);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = document.querySelector("input").value;
  validation(inputValue) && addTask(inputValue);
  document.querySelector("input").value = "";
});

function addTask(inputValue) {
  // add default status
  const newTask = {
    id: Date.now().toString(),
    name: inputValue,
    status: "inProgress",
  };
  data.push(newTask);
  refreshLocalStorage();

  const newEl = createElement(
    Date.now().toString(),
    "inProgress",
    newTask.name
  );
  document.getElementById("default").append(newEl);
}

function updateUI() {
  for (let i = 0; i < data.length; i++) {
    const containe = document
      .querySelector(`.${data[i].status}`)
      .querySelector(".tasksSection");
    const newEl = createElement(data[i].id, data[i].status, data[i].name);
    containe.append(newEl);
  }
}
function createElement(id, status, text) {
  const newEl = document.createElement("li");
  newEl.textContent = text;
  newEl.classList.add("task");
  newEl.setAttribute("draggable", "true");
  newEl.setAttribute("data-status", status);
  newEl.setAttribute("data-id", id);

  newEl.addEventListener("dragstart", () => {
    newEl.classList.add("isDragging");
  });
  newEl.addEventListener("dragend", () => {
    newEl.classList.remove("isDragging");
  });
  return newEl;
}
function refreshLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

function validation(value) {
  const isStr = isNaN(+value);
  const isNum = parseInt(value.trim());
  const isEmbty = value.trim() === "";

  return isStr && !isEmbty && !isNum;
}
