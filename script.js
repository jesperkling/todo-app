const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = todoInput.value.trim();

  console.log("Todo input value:", todoText);

  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  console.log("New todo item created:", li);

  todoList.appendChild(li);

  todoInput.value = "";
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
