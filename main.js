const toDoList = [];
const taskInput = document.querySelector(".add input");
const taskCounter = document.querySelector("h1 span");
const ul = document.querySelector("ul");

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((listElement, key) => {
    listElement.dataset.key = key;
    ul.appendChild(listElement);
  });
};

const removeTask = (e) => {
  const taskIndex = e.target.parentNode.dataset.key;
  toDoList.splice(taskIndex, 1);
  taskCounter.textContent = toDoList.length;
  renderList();
};

const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === "") return;
  const newTask = document.createElement("li");
  newTask.className = "task";
  newTask.innerHTML = taskInput.value + "<button>Usuń</button>";
  taskInput.value = "";
  toDoList.push(newTask);
  taskCounter.textContent = toDoList.length;
  ul.appendChild(newTask);
  renderList();
  newTask.addEventListener("click", removeTask);
};

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let filtr = toDoList.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  filtr.forEach((li) => ul.appendChild(li));
};

document.querySelector("form.add").addEventListener("submit", addTask);
document.querySelector("input.search").addEventListener("input", searchTask);
