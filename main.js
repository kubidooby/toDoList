const toDoList = [];
const taskInput = document.querySelector(".add input");
const taskCounter = document.querySelector("h1 span");
const taskList = document.querySelector("ul");

const renderList = () => {
  taskList.textContent = "";
  toDoList.forEach((listElement, key) => {
    listElement.dataset.key = key;
    taskList.appendChild(listElement);
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
  taskList.appendChild(newTask);
  renderList();
  document.querySelector(".task button").addEventListener("click", removeTask);
};

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtr = toDoList.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  taskList.textContent = "";
  filtr.forEach((li) => taskList.appendChild(li));
};

document.querySelector("form.add").addEventListener("submit", addTask);
document.querySelector("input.search").addEventListener("input", searchTask);
