import Tasks from './Tasks.js';
import getFromStorage from './Storage.js';
import displayTasks from './Structure.js';

const insertTask = new Tasks();
const tasksListDisplay = document.querySelector('.display-list');

let allTasks = JSON.parse(getFromStorage('todo')) || [];

const addTask = () => {
  const taskDescription = document.querySelector('.input-task');
  const inputTask = document.querySelector('.fa-arrow-left');
  inputTask.addEventListener('click', () => {
    insertTask.addTask(taskDescription.value, false, (allTasks.length + 1));
    tasksListDisplay.innerHTML = '';
    allTasks = JSON.parse(getFromStorage('todo'));
    allTasks.forEach((i) => {
      displayTasks(i);
    });
    taskDescription.value = '';
  });

  taskDescription.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      insertTask.addTask(taskDescription.value, false, (allTasks.length + 1));
      tasksListDisplay.innerHTML = '';
      allTasks = JSON.parse(getFromStorage('todo'));
      allTasks.forEach((j) => {
        displayTasks(j);
      });
      taskDescription.value = '';
    }
  });
};

export default addTask;