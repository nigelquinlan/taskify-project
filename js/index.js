// Task Manager initialization
const taskManager = new TaskManager(0);

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
    let input1IsValid = false;
    let input2IsValid = false;
    let select1IsValid = false;
    let input3IsValid = false;
    let select2IsValid = false;

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
            input1IsValid = true;
            console.log(input1IsValid);
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
            input2IsValid = true;
            console.log(input2IsValid);
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
            select1IsValid = true;
            console.log(select1IsValid);
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
            input3IsValid = true;
            console.log(input3IsValid);
        }
// Case #2 - the due date is in future
        else if (dueDate.getTime() > today.getTime()) {
                console.log('due date is in the future');
                input3.classList.add('is-valid');
                input3.classList.remove('is-invalid');
                input3IsValid = true;
                console.log(input3IsValid);
        }
// Case #3 - the due date is in past
         else {
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
            select2IsValid = true;
            console.log(select2IsValid);
        } else {
            select2.classList.add('is-invalid');
            select2.classList.remove('is-valid');
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
    input1IsValid === true &&
    input2IsValid === true &&
    select1IsValid === true &&
    input3IsValid === true &&
    select2IsValid === true
    )
    {
// Call the TaskManager method addTask
// format is name.method(parameters)
    console.log(name);
    taskManager.addTask(name, description, assignedTo, date, status);
    console.log(taskManager);

// Clear the form input values
// thx to Nick, I wouldn't have thought of this
    input1.value = '';
    input2.value = '';
    select1.value = '';
    input3.value = '';
    select2.value = '';
    }
});

// Note = construction of TaskManager and its methodaddTask is in taskManager.js