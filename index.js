// Get the form element and add an event listener for the submit event
const form = document.querySelector('#create-task-form');
form.addEventListener('submit', function(event) {

  // Prevent the default form behavior
  event.preventDefault();

  // Get the input value from the description field
  const descriptionInput = document.querySelector('#new-task-description');
  const description = descriptionInput.value;

  // Add the new task to the list
  const tasksList = document.querySelector('#tasks');
  const newTask = document.createElement('li');
  newTask.textContent = description;
  tasksList.appendChild(newTask);

  // Clear the input field
  descriptionInput.value = '';
});

//Add a delete button to each task and add an event listener to remove the task
tasksList.addEventListener('click', function(event) {
  if (event.target.nodeName === 'BUTTON') {
    event.target.parentNode.remove();
  }
});
// Update the task creation code to include a delete button
newTask.innerHTML = `${description} <button>Delete</button>`;

const prioritySelect = document.querySelector('#priority');
const priority = prioritySelect.value;
newTask.style.color = priority;
// Add an event listener to update the task text color when the priority is changed
prioritySelect.addEventListener('change', function() {
  newTask.style.color = prioritySelect.value;
});

function sortTasks() {
    const tasks = Array.from(tasksList.children);
    tasks.sort(function(a, b) {
      const aPriority = a.style.color;
      const bPriority = b.style.color;
      if (aPriority === bPriority) {
        return 0;
      } else if (aPriority === 'red') {
        return 1;
      } else if (bPriority === 'red') {
        return -1;
      } else if (aPriority === 'yellow') {
        return 1;
      } else if (bPriority === 'yellow') {
        return -1;
      } else if (aPriority === 'green') {
        return 1;
      } else if (bPriority === 'green') {
        return -1;
      }
    });
    tasks.forEach(function(task) {
      tasksList.appendChild(task);
    });
  }
  // Add a sorting button to the page and add an event listener to sort the tasks when clicked
  const sortButton = document.createElement('button');
  sort
  
  
  
  
  
  
  
  
  
  
  
  