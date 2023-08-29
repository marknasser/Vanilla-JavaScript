const form = document.querySelector("form");
const tasksContainer = document.querySelector(".todo-list");

//Add event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = document.querySelector("input").value;
  validation(inputValue) && addTask(inputValue);
  document.querySelector("input").value = "";
});

//Delete event attached to parent
tasksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    deleteTask(e.target.parentNode);
  }
  if (e.target.classList.contains("complete")) {
    completeTask(e.target.parentNode);
  }
});

//_________________FUNCTIONS_________________
function addTask(str) {
  const taskElemnt = document.createElement("li");
  const p = document.createElement("p");
  const deleteBTN = document.createElement("button");
  const completeBTN = document.createElement("button");

  p.textContent = str;
  deleteBTN.textContent = "delete";
  completeBTN.textContent = "complete";

  taskElemnt.classList.add("task");
  deleteBTN.classList.add("delete");
  completeBTN.classList.add("complete");

  taskElemnt.append(p, completeBTN, deleteBTN);
  tasksContainer.append(taskElemnt);
  /* //using AdjacentHtml
  const html = `
      <li class="task">
        <p class="">${str}</p>
        <button class="complete">complete</button>
        <button class="delete">delete</button>
      </li>`;
  tasksContainer.insertAdjacentHTML("beforeend", html);
  */
}
function deleteTask(li) {
  li.remove();
}

function completeTask(li) {
  li.querySelector("p").classList.toggle("completed");
}

function validation(value) {
  const isStr = isNaN(+value);
  const isNum = parseInt(value.trim());
  const isEmbty = value.trim() === "";

  return isStr && !isEmbty && !isNum;
}
//
