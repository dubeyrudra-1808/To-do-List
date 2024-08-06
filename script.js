let todoList = [];

// Initial load of the todo list from localStorage
loadTodos();

// Initial display of items
displayItems();

// Function to add a todo item
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  
  if (todoItem && todoDate) {
    todoList.push({ item: todoItem, dueDate: todoDate });
    saveTodos();
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  } else {
    alert('Please fill out both fields.');
  }
}

// Function to display todo items
function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="deleteTodo(${i});">Delete</button>
      
    `;
  }
  containerElement.innerHTML = newHtml;
}

// Function to delete a todo item
function deleteTodo(index) {
  todoList.splice(index, 1);
  saveTodos();
  displayItems();
}

// Function to save todo list to localStorage
function saveTodos() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Function to load todo list from localStorage
function loadTodos() {
  let savedTodos = localStorage.getItem('todoList');
  if (savedTodos) {
    todoList = JSON.parse(savedTodos);
  } else {
    todoList = [];
  }
}

// Event listener for the Add button
document.getElementById('add-todo').addEventListener('click', addTodo);
