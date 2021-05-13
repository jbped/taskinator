var formEl = document.querySelector("#task-form")
var taskToDoEl = document.querySelector("#tasks-to-do");
var pageContentEl = document.querySelector('#page-content');
var taskIdCounter = 0;

var taskFormHandler = function (event) {
    // Prevents page from reloading on event
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;  

    if(!taskNameInput || !taskTypeInput) {
        alert("You'll need to fill out the task form.")
        return false;
    }

    formEl.reset();

    // pack up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj){
    // Create new list item
    var listItemEl = document.createElement("li");
    // Style List item with matching CSS class
    listItemEl.className = "task-item";

    // Add task-item ID
    listItemEl.setAttribute("data-task-id", taskIdCounter)
    
    // Create div element
    var taskInfoEl = document.createElement("div");
    // Give the new div the class of task-info
    taskInfoEl.className = "task-info";
    
    // Inside of the div add inner HTML an h3 with the class of "task-name" inside the h3 tag include the value determined in the taskNameInput do the same with a new span and nest taskTypeInput within
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "<h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    // Create a new child which is the above listItemEl in the ul associated with taskToDoEl
    taskToDoEl.appendChild(listItemEl);

    // Increate taskId Counter
    taskIdCounter++;
}

var createTaskActions = function(taskId){
    var actionContainerEl = document.createElement('div');
    actionContainerEl.className = "task-actions"

    // Edit Button
    var editButtonEl = document.createElement('button');
        editButtonEl.textContent = "Edit";
        editButtonEl.className = "btn edit-btn";
        editButtonEl.setAttribute("data-task-id", taskId)
    
    actionContainerEl.appendChild(editButtonEl);

    // Delete button
    var deleteButtonEl = document.createElement('button');
        deleteButtonEl.textContent = 'Delete';
        deleteButtonEl.className = 'btn delete-btn';
        deleteButtonEl.setAttribute('data-task-id', taskId)

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
        statusSelectEl.className = 'select-status';
        statusSelectEl.setAttribute('name', 'status-change');
        statusSelectEl.setAttribute('data-task-id',taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ['To Do', 'In Progress', 'Completed'];

    for (var i = 0; i < statusChoices.length; i++) {
        var statusOptionEl = document.createElement('option');
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute('value', statusChoices[i]);

    statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;

};

var taskButtonHandler = function(event) {
    console.log(event.target);
    var targetEl = event.target;

    // Edit button was clicked
    // If target attribute matches .edit-btn 
    if (targetEl.matches('.edit-btn')){
        // Get the data-task-id attribute
        var taskId = targetEl.getAttribute('data-task-id');
        // Run editTask function with the taskID passed through the function
        editTask(taskId);
    }

    // Delete Button was Clicked
    if (targetEl.matches('.delete-btn')) {
        var taskId = targetEl.getAttribute('data-task-id');
        deleteTask(taskId);
    }
};

// How does this refer to the correct ticket? taskId is passed through from the taskButtonHandler function
var deleteTask = function(taskId){
    var taskSelected = document.querySelector('.task-item[data-task-id="' + taskId + '"]');
    taskSelected.remove();
}

var editTask = function(taskId) {
   console.log('editing task #', + taskId);
    // get task list item element
   var taskSelected = document.querySelector('.task-item[data-task-id="' + taskId + '"]');

    // get content from task name and  by using the returned result from the line above, then drill down futher for an H3 with the class of task-name
    var taskName = taskSelected.querySelector('h3.task-name').textContent;
    console.log('Task Name',taskName);

    var taskType = taskSelected.querySelector('span.task-type').textContent;
    console.log('Task Type',taskType);

    document.querySelector('input[name="task-name"]').value = taskName;
    document.querySelector('select[name="task-type"]').value = taskType;
    document.querySelector('#save-task').textContent = "Save Task";

    // preserve existing taskId for the task after saving the edit.
    formEl.setAttribute('data-task-id', taskId);
}

// On form submission (button element nested in the form with the type attribute of "submit") run taskFormHandler function
formEl.addEventListener("submit", taskFormHandler);    

pageContentEl.addEventListener('click', taskButtonHandler);