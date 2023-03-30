import './style.css';
import addTask from './modules/Add.js';
import displayTasks from './modules/Structure.js';
import deleteTask from './modules/Delete.js';

const tasksListDisplay = document.querySelector('.display-list');
const allTasks = JSON.parse(localStorage.getItem('todo')) || [];

if (allTasks.length === 0) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks are available now!</p>';
}

/* Adding a new task */
addTask();

window.addEventListener('DOMContentLoaded', () => {
  allTasks.forEach((i) => {
    displayTasks(i);
  });
});

/* Removing a task */
tasksListDisplay.addEventListener('click', (e) => {
  const target = e.target.closest('.fa-ellipsis-v');
  const trash = e.target.closest('.fa-trash-can');
  const listDisplay = document.querySelector('.display-list');
  if (target) {
    target.nextElementSibling.classList.toggle('show');
    target.style.display = 'none';
    deleteTask(Number(target.id));
    localStorage.setItem('todo', JSON.stringify(listDisplay));
  }

  if (trash) {
    deleteTask(Number(trash.id));
  }
});