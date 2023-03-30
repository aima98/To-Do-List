import getFromStorage from './Storage.js';
import deleteTask from './Delete.js';

const display = document.querySelector('.display-list');

const displayTasks = (tasksObj) => {
  const tasksList = document.createElement('ul');
  tasksList.classList.add('tasks-list');
  display.appendChild(tasksList);
  const task = document.createElement('li');
  task.classList.add('list-item');
  tasksList.appendChild(task);

  task.innerHTML = `
    <div class='task'>
      <input type='checkbox' class='checkbox' id='${tasksObj.index}'/>
      <input class="description" type='text' value='${tasksObj.description}' id='input-display-${tasksObj.index}' data-id='${tasksObj.index}' class='input-display'/>
    </div>
    <i class="fa fa-ellipsis-v" aria-hidden="true" id="rmv-${tasksObj.index}"></i>
    <i class="fa-solid fa-trash-can" data-id="${tasksObj.index}" id="btn-${tasksObj.index}"></i>
  `;

  const taskStatus = document.getElementById(tasksObj.index);
  const inputDisplay = document.getElementById(`input-display-${tasksObj.index}`);

  if (tasksObj.completed === true) {
    taskStatus.checked = true;
    inputDisplay.style.textDecoration = 'line-through';
  } else {
    taskStatus.checked = false;
    inputDisplay.style.textDecoration = 'none';
  }

  /* Removing tasks */
  const removeBtn = document.getElementById(`btn-${tasksObj.index}`);
  removeBtn.addEventListener('click', () => {
    deleteTask(tasksObj.index);
  });

  /* Updating tasks */
  const editTasks = document.getElementById(`input-display-${tasksObj.index}`);
  editTasks.addEventListener('change', () => {
    const task = document.getElementById(`input-display-${tasksObj.index}`);
    let allTasks = JSON.parse(getFromStorage('todo'));
    allTasks.forEach((item) => {
      if (item.index === tasksObj.index) {
        item.description = task.value;
      }
    });
    allTasks = localStorage.setItem('todo', JSON.stringify(allTasks));
    display.innerHTML = '';
    allTasks = JSON.parse(getFromStorage('todo'));
    allTasks.forEach((i) => {
      displayTasks(i);
    });
  });
};

export default displayTasks;