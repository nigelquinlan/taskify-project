// Create a createTaskHtml function with the parameters of the task inputs
const createTaskHtml = (name, description, assignedTo, date, status) => `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${date}</small>
        </div>
        <p>${description}</p>
    </li>
    `
// Create a TaskManager class - task 1
class TaskManager {
    constructor(currentId = 0) {
    // Set up a task property with an empty array
        this.tasks = [];
        console.log('Empty array: ' + this.tasks);
        this.currentId = currentId;
        console.log('Current Id: ' + this.currentId);
    }
// Jane doing this - task 2
// Add a new task method
    addTask(name, description, assignedTo, date, status) {
        const task = {
// Add a task Id to the task object and increment the currentId
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            date: date,
            status: status
        }
// Add the task object to the tasks array
        this.tasks.push(task);
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
                const formattedDate = dueDate.getDate() +'/'+dueDate.getMonth()+'/'+dueDate.getFullYear();
// Create a taskHtml variable to store the html of the current task and formattedDate
                const taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
// Push the current tasks html into the tasksHtmlList
                tasksHtmlList.push(taskHtml);
            } // End of loop 
// Create a tasksHtml variable, set the variable to a string of html by joining each piece of html the taskHtmlList array together
// Using '\n' to put a line break between each block of html
            const tasksHtml = tasksHtmlList.join('\n');
// Set the <p> inner html of the <div> with id=taskList in form.html
            const tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = tasksHtml;
        } // End of render  
};