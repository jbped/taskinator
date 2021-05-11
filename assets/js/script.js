var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    // Create new list item
    var listItemEl = document.createElement("li");
    // Style List item with matching CSS class
    listItemEl.className = "task-item";
    // Add text content to the new li item <li>TEXT CONTENT</li>
    listItemEl.textContent = "This is a new item.";
    // Create a new child which is the above listItemEl in the ul associated with taskToDoEl
    taskToDoEl.appendChild(listItemEl);
};

// On button click with save-task id
buttonEl.addEventListener("click", createTaskHandler);
    