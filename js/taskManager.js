// Create a TaskManager class - task 1
class TaskManager {
    constructor(currentId = 0) {
    // Set up a task property with an empty array
        this.tasks = [];
        console.log(this.tasks);
        this.currentId = currentId;
        console.log(this.currentId);
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

};