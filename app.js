// Get reference to the <ul> element where tasks will be displayed
const listContainer = document.getElementById('todo__list');

// Get reference to the input element where users can enter tasks
const task = document.getElementById('input__box');

// Function to add a task to the list
function addTask() {
    // Check if the input is empty
    if (task.value == '') {
        alert('Enter Some Task');
    } else {
        // Create a new <li> element
        let li = document.createElement('li');
        // Set the innerHTML of the <li> element to the entered task
        li.innerHTML = task.value;
        // Append the <li> element to the list container
        listContainer.appendChild(li);

        // Create a <span> element (for delete button)
        let span = document.createElement('span');
        // Set the innerHTML of the <span> element to a close symbol (X)
        span.innerHTML = "\u00d7";
        // Append the <span> element to the <li> element
        li.appendChild(span);

        // Clear the input box
        task.value = '';

        // Save the updated task list to local storage
        saveTask();
    }
}

// Listen for click events on the list container
listContainer.addEventListener('click', function(e) {
    // If a <li> element is clicked, toggle its 'checked' class
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        // Save the updated task list to local storage
        saveTask();
    }
    // If a <span> element (delete button) is clicked, remove its parent <li> element
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        // Save the updated task list to local storage
        saveTask();
    }
});

// Function to save the task list to local storage
function saveTask() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Function to show tasks from local storage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

// Call the showTask function to load tasks from local storage
showTask();
