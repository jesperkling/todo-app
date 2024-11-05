const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  li.appendChild(deleteButton);

  todoList.appendChild(li);

  todoInput.value = "";

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(li);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
