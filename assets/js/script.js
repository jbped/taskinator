var formEl = document.querySelector("#task-form")
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    // Prevents page from reloading on event
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // Create new list item
    var listItemEl = document.createElement("li");
    // Style List item with matching CSS class
    listItemEl.className = "task-item";

    // Create div element
    var taskInfoEl = document.createElement("div");
    // Give the new div the class of task-info
    taskInfoEl.className = "task-info";

    // Inside of the div add inner HTML an h3 with the class of "task-name" inside the h3 tag include the value determined in the taskNameInput do the same with a new span and nest taskTypeInput within
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "<h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    // Create a new child which is the above listItemEl in the ul associated with taskToDoEl
    taskToDoEl.appendChild(listItemEl);
};

// On form submission (button element nested in the form with the type attribute of "submit") run createTaskHandler function
formEl.addEventListener("submit", createTaskHandler);    