// Task Manager initialization
const taskManager = new TaskManager(0);

// taskManager.addTask('Walk the dog', 'Bring him to the park and let him run', 'Jane Taas', '2020-10-10', 'To do');

// Load any tasks if already in local storage
taskManager.load();

// Render these tasks to the browser
taskManager.render();

// Render any tasks from local storage only if they exist
// Don't want to do this here as it will return a null result if call render with no tasks
// Add it to the if statement withing load method

// Select the form we want to target
const formValidate = document.querySelector('#form-validate');

// Add an 'on submit' listener
formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

//  Select the inputs on the form
    const input1 = document.querySelector('#form-validate-task-name');
    const input2 = document.querySelector('#form-validate-task-description');
    const select1 = document.querySelector('#form-validate-assigned-to');
    const input3 = document.querySelector('#form-validate-due-date');
    const select2 = document.querySelector('#form-validate-status');

// Declare variables for validation of each input as false - before they are validated
    let input1Validity = false;
    let input2Validity = false;
    let select1Validity = false;
    let input3Validity = false;
    let select2Validity = false;

// Call the validation functions
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
            input1Validity = true;
            console.log('Input1 is valid: '+ input1Validity);
        } else {
            input1.classList.add('is-invalid');
            input1.classList.remove('is-valid');
            console.log('Input1 is valid: '+ input1Validity);
        }
    };

// Validate Input2
    function isValidInput2 () {
        if (input2.value.length > 15) {
            input2.classList.add('is-valid');
            input2.classList.remove('is-invalid');
            input2Validity = true;
            console.log('Input2 is valid: '+ input2Validity);
        } else {
            input2.classList.add('is-invalid');
            input2.classList.remove('is-valid');
            console.log('Input2 is valid: '+ input2Validity);
        }
    };

// Validate Select1
    function isValidSelect1 () {
        if (select1.value !== "") {
            select1.classList.add('is-valid');
            select1.classList.remove('is-invalid');
            select1Validity = true;
            console.log('Select1 is valid: ' + select1Validity);
        } else {
            select1.classList.add('is-invalid');
            select1.classList.remove('is-valid');
            console.log('Select1 is valid: ' + select1Validity)
        }
    };

// Thoughts on validating the date
// Want to compare the date in the input to today's date
// The date entered needs to be either today's date or a future date
// Use console log to check date format!

// Validate Input3
// There are 3 cases for the date input - it can be today, future or past
    function isValidInput3 () {
// Get current date including milliseconds!
        const today = new Date();
// Convert due date into same format for comparison.
        const dueDate = new Date(input3.value);

// Case #1 - the due date is the same as today's date
// Only comparing the years, the months and the date as we don't need hrs, mins, secs, milliseconds!
        if (
        today.getFullYear() === dueDate.getFullYear() &&
        today.getMonth() === dueDate.getMonth() &&
        today.getDate() === dueDate.getDate()
        ){
            console.log('date is today');
            input3.classList.add('is-valid');
            input3.classList.remove('is-invalid');
            input3Validity = true;
            console.log('Input3 is valid: ' + input3Validity);
        }
// Case #2 - the due date is in future
        else if (dueDate.getTime() > today.getTime()) {
                console.log('due date is in the future');
                input3.classList.add('is-valid');
                input3.classList.remove('is-invalid');
                input3Validity = true;
                console.log('Input3 is valid: ' + input3Validity);
        }
// Case #3 - the due date is in past
         else {
            input3.classList.add('is-invalid');
            input3.classList.remove('is-valid');
            console.log('Input3 is valid: ' + input3Validity);
        }
    };

// Validate Select2
    function isValidSelect2 () {
        if (select2.value !== "") {
            select2.classList.add('is-valid');
            select2.classList.remove('is-invalid');
            select2Validity = true;
            console.log('Select2 is valid: ' + select2Validity);
        } else {
            select2.classList.add('is-invalid');
            select2.classList.remove('is-valid');
            console.log('Select2 is valid: ' + select2Validity);
        }
    };
// End of validation function

// Assign the values of the inputs from the form
    const name = input1.value;
    const description = input2.value;
    const assignedTo = select1.value;
    const date = input3.value;
    const status = select2.value;   
// End of assigning input values

// Check if all validation is true
if (
    input1Validity === true &&
    input2Validity === true &&
    select1Validity === true &&
    input3Validity === true &&
    select2Validity === true
    )
    {
// Call the taskManager method addTask
// format is name.method(parameters)
    taskManager.addTask(name, description, assignedTo, date, status);

// Render the html
    taskManager.render();

// Call the taskManager method save    
    taskManager.save();

// Clear the form input values
// thx to Nick, I wouldn't have thought of this
    input1.value = '';
    input2.value = '';
    select1.value = '';
    input3.value = '';
    select2.value = '';

// Clear the bootstrap validation ready for next inputs
    input1.classList.remove('is-valid');
    input2.classList.remove('is-valid');
    select1.classList.remove('is-valid');
    input3.classList.remove('is-valid');
    select2.classList.remove('is-valid');

// Close the modal by toggling
$('#staticBackdrop').modal('toggle');
}
}); 
// Note: the construction of TaskManager and its method .addTask is in taskManager.js

// Build a function for marking a task as done
// Target tasksList id
const tasksList = document.querySelector('#tasksList');
// Add an event listener for a button being clicked
tasksList.addEventListener('click', (event) => {
    event.preventDefault();
// Check if a 'mark as done' button was clicked   
    if (event.target.classList.contains('done-button')) {
// DOM traversal to read the parent element of the task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
// Get the taskId of the parent task
        const taskId = Number(parentTask.dataset.taskId);
// Get the task from TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);
// Update the task status to 'Done'
        task.status = 'Done';
// Call the taskManager method save
        taskManager.save();        
// Render the tasks
        taskManager.render();
        console.log(`Done Task Id: ${taskId}`);
    }
  
// Build a function for deleting a task
// Check if a 'delete task' button  was clicked   
if (event.target.classList.contains('delete-button')) {
    // DOM traversal to read the parent element of the task
            const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    // Get the taskId of the parent task
            const taskId = Number(parentTask.dataset.taskId);
    // Pass the taskId to the TaskManager delete method
            taskManager.deleteTask(taskId);
    // Call the taskManager method save
            taskManager.save();        
    // Render the tasks
            taskManager.render();
    // Set a message to the browser if no tasks are present
            if (this.tasks.length === 0) {
                const noList = document.querySelector('#tasksList');
                createNoListHtml = () =>
                `<div class="d-flex w-100 mb-3 justify-content-between">
                <h3>No tasks in your list yet</h3>
                </div>`;
                const noListHtml = createNoListHtml();
                console.log(noListHtml);
                noList.innerHTML = noListHtml;
            }
        }   
    });





