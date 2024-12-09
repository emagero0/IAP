// Query for the submit button and input field at the beginning
const submit = document.getElementById('submit');
const newTask = document.getElementById('task');
const taskList = document.getElementById('tasks');

// Disable the submit button by default
submit.disabled = true;

// Listen for input in the task input field
newTask.addEventListener('input', () => {
    // Enable the submit button only if there is text in the input field
    submit.disabled = newTask.value.trim() === '';
});

// Listen for form submission
document.querySelector('form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the task the user just submitted
    const taskText = newTask.value.trim();

    if (taskText) {
        // Create a new list item element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add the new task to the unordered list
        taskList.append(listItem);

        // Clear the input field
        newTask.value = '';

        // Disable the submit button again after adding the task
        submit.disabled = true;
    }

    // Prevent the form from redirecting or reloading
    return false;
});
