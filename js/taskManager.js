// Create a createTaskHtml function with the parameters of the task inputs
const createTaskHtml = (id, name, description, assignedTo, date, status) => `
<div class="col-lg-8 col-lg-offset-2 col-sm-12" data-task-id=${id}>
    <div class="card bg-light border-light rounded ml-5 mb-5 w-80">
        <div class="card-body">
            <div class="d-flex w-70 mt-2 justify-content-between align-items-center">
                <h4 class="card-title">${name}</h4>
                <span class="badge badge-danger">${status}</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
                    <small>Assigned To: ${assignedTo}</small>
                    <small>Due: ${date}</small>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
                <p>${description}</p>
            </div>
            <div class="d-flex w-50 mb-3">
                <button class="btn btn-outline-success done-button mr-3">Mark as done</button>
                <button class="btn btn-outline-success delete-button mr-3 ml-3">Delete task</button>
            </div>
        </div>
    </div>
</div>
    `;

// Create a TaskManager class - task 1
class TaskManager {
    constructor(currentId = 0) {
    // Set up a task property with an empty array
        this.tasks = [];
        this.currentId = currentId;
    }
// Add an addTask method - task 2
    addTask(name, description, assignedTo, date, status) {
        const task = {
// Add a task Id to the task object and increment the currentId
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            date: date,
            status: status
        };
// Add the task object to the tasks array
        this.tasks.push(task);
    }
// Start of getTaskById method
    getTaskById(taskId) {
        let foundTask;
    // Loop over all the tasks in this.tasks
            for(let i = 0; i < this.tasks.length; i++) {
    // Create a variable to store the current task
                const task = this.tasks[i];
    // Check if the task.id from this.task is the same as the taskId from parent task
                if (task.id === taskId){
                    foundTask = task;
                }
            }   
// Return the found task        
        return foundTask;    
    }
// Create a render method
   render() {
// Create a variable to store all the tasks html
            const tasksHtmlList = [];
// Loop over all tasks in this.tasks
            for (let i = 0; i < this.tasks.length; i++) {
// Create a variable to store the current task as the loop iterates
                const currentTask = this.tasks[i]
// Put date in correct format
                const dueDate = new Date(currentTask.date);
                const formattedDate = dueDate.getDate() +'/'+(dueDate.getMonth() + 1)+'/'+dueDate.getFullYear();
// Create a taskHtml variable to store the html of the current task and formattedDate
                const taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
// Push the current tasks html into the tasksHtmlList
                tasksHtmlList.push(taskHtml);
            } // End of loop 
// Create a tasksHtml variable, set the variable to a string of html by joining each piece of html in the taskHtmlList array together
// Using '\n' to put a line break between each block of html
            const tasksHtml = tasksHtmlList.join('\n');
// Set the <p> inner html of the <div> with id=taskList in index.html
            const tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = tasksHtml;
        } // End of render

// Create a save method
    save() {
// Convert the array of tasks to a string using JSON.stringify()
            const tasksJson = JSON.stringify(this.tasks);
// Save the string to local storage
            localStorage.setItem('tasks', tasksJson);
// Convert the currentId from a number to a string
            const currentId = String(this.currentId);
// Save the string with currentId to local storage
            localStorage.setItem('currentId', currentId);
        }
// Create a load method
    load() {
// Check if any tasks are saved in localStorage
// If true
        if (localStorage.getItem('tasks')) {
// Get the JSON string of tasks in localStorage
            const tasksJson = localStorage.getItem('tasks');
// Convert it to an array and store it in our TaskManager
            this.tasks = JSON.parse(tasksJson);
        }
        

// Check if the currentId is saved in localStorage
// If true
        if (localStorage.getItem('currentId')) {
// Get the currentId string in localStorage
            const currentId = localStorage.getItem('currentId');
// Convert the currentId to a number and store it in TaskManager
            this.currentId = Number(currentId);
        }
    }
// Create a delete task method    
    deleteTask(taskId) {
        const newTasks = [];
        for(let i = 0; i < this.tasks.length; i++) {
// Get the current task in the loop            
            const task = this.tasks[i];
            console.log(task)
// Check that the task id is not the same as the task id of the deleted task            
            if(task.id !== taskId) {
            newTasks.push(task);
            } 
        }
        this.tasks = newTasks;
    }  
};