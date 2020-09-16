
const formValidate = document.querySelector('#form-validate');
const input1 = document.querySelector('#form-validate-task-name');
const input2 = document.querySelector('#form-validate-task-description');
const select1 = document.querySelector('#form-validate-assigned-to');
const input3 = document.querySelector('#form-validate-due-date');
const select2 = document.querySelector('#form-validate-status');

// Listener on submit
formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    isValidInput1();
    isValidInput2();
    isValidSelect1();
    isValidInput3();
    isValidSelect2();    

// Validate Input1
    function isValidInput1 () {
    if (input1.value.length > 8) {
        input1.classList.add('is-valid');
        input1.classList.remove('is-invalid');
        } else {
        input1.classList.add('is-invalid');
        input1.classList.remove('is-valid');
        }
    };

// Validate Input2
    function isValidInput2 () {
        if (input2.value.length > 15) {
            input2.classList.add('is-valid');
            input2.classList.remove('is-invalid');
        } else {
            input2.classList.add('is-invalid');
            input2.classList.remove('is-valid');
        }
    };

// Validate Select1
    function isValidSelect1 () {
        if (select1.value !== "") {
            select1.classList.add('is-valid');
            select1.classList.remove('is-invalid');
        } else {
            select1.classList.add('is-invalid');
            select1.classList.remove('is-valid');
        }
    };

// Thoughts on validating the date
// Want to compare the date in the input to today's date
// The date entered needs to be either today's date or a future date
// Use console log to check date format!

// Validate Input3
    function isValidInput3 () {
        const today = new Date();
        const dueDate = new Date(input3.value);

// Due date is the same as today's date
        if (
        today.getFullYear() === dueDate.getFullYear() &&
        today.getMonth() === dueDate.getMonth() &&
        today.getDate() === dueDate.getDate()
        ){
            console.log('date is today');
            input3.classList.add('is-valid');
            input3.classList.remove('is-invalid');
        }
// Due date is in future
        else if (dueDate.getTime() > today.getTime()) {
            console.log('due date is in the future');
            input3.classList.add('is-valid');
            input3.classList.remove('is-invalid');

// Due date is in past
        } else {
            console.log('due date is in the past');
            input3.classList.add('is-invalid');
            input3.classList.remove('is-valid');
        }
    };

// Validate Select2
    function isValidSelect2 () {
        if (select2.value !== "") {
            select2.classList.add('is-valid');
            select2.classList.remove('is-invalid');
        } else {
            select2.classList.add('is-invalid');
            select2.classList.remove('is-valid');
        }
    };
});

// Define a the object structure to represent a task using JavaScript with the following fields:
// ID -> Number
// Name -> String
// Description -> String
// AssignedTo (person responsible for completing the task) -> String
// DueDate -> Date when the task is due
// Status (TODO, IN PROGRESS, REVIEW and DONE) -> String

// create an object for each task - need a key:value pair within {}
let task = {
    taskID:"00001",
    taskName:[Input1.value],
    taskDescription:[Input2.value],
    taskAssigned:[Select1.value],
    taskDueDate:[Input3.value],
    taskStatus:[Select2.value]
};

let allTasks = [
    {task1}
    {task2}
    {task3}
];


let TaskManager = ({task}) => {
    return 
}
// Define a tasks Array or Object to hold the tasks, and a TaskManager Object with the following functions:

// Let's call the array containing all tasks 'allTasks'

// Get Tasks -> returns the list of ALL tasks
// Use .foreach

allTasks.foreach



// Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument:
// function getTasksWithStatus(status)

// Add Task -> a task to existing Tasks List
// function addTask(task)

// Delete Task -> deletes a task from the Tasks List
// function deleteTask(task)

// Update task status -> update the task status
// function updateTask(taskId, status)

// Assign a task to -> updates the value of the assigned task to the field of a given task
// function assignTask(taskId, assignee)
