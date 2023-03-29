import './style.css';
import displayTasks from './modules/Structure.js';
import addTask from './modules/Add.js';
import getFromStorage from './modules/Storage.js';

// Create Tasks
const allTasks = [
  {
    description: 'Cooking',
    completed: false,
    index: 1,
  },
  {
    description: 'Washing dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'Taking a bath',
    completed: false,
    index: 3,
  },
  {
    description: 'Going to sleep',
    completed: true,
    index: 4,
  },
];

const tasksListDisplay = document.querySelector('.display-list');

if (allTasks.length === 0) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
}

/* Creating footer */
const footer = () => {
  const todoListContainer = document.querySelector('.todo-list');
  const display = document.querySelector('.display-list');

  const lowDiv = document.createElement('div');
  lowDiv.classList.add('footer');
  todoListContainer.appendChild(lowDiv);
  lowDiv.innerHTML = `
      <button id='clear-tasks'>Clear all completed.</button>
    `;

  const clearTasks = document.getElementById('clear-tasks');
  clearTasks.addEventListener('click', () => {
    let allTasks = JSON.parse(getFromStorage('todo')) || [];
    allTasks = allTasks.filter((e) => e.completed !== true);
    localStorage.setItem('todo', JSON.stringify(allTasks));
    display.innerHTML = '';
    JSON.parse(getFromStorage('todo'));
    allTasks.forEach((element) => {
      displayTasks(element);
    });
  });
};

/* Adding a new task */
addTask();

window.addEventListener('DOMContentLoaded', () => {
  allTasks.forEach((i) => {
    displayTasks(i);
  });
  footer();
});