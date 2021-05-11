var formEl = document.querySelector("#task-form")
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    // Prevents page from reloading on event
    event.preventDefault();
    // Create new list item
    var listItemEl = document.createElement("li");
    // Style List item with matching CSS class
    listItemEl.className = "task-item";
    // Add text content to the new li item <li>TEXT CONTENT</li>
    listItemEl.textContent = "This is a new item.";
    // Create a new child which is the above listItemEl in the ul associated with taskToDoEl
    taskToDoEl.appendChild(listItemEl);
};

// On form submission (button element nested in the form with the type attribute of "submit") run createTaskHandler function
formEl.addEventListener("submit", createTaskHandler)    