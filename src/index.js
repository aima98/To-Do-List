import Helpers from './modules/Structure.js';
import InteractiveList from './modules/InteractiveList.js';
import './style.css';

const task = new Helpers();
const IL = new InteractiveList();

const list = document.getElementById('list');
const form = document.querySelector('form');
const inputField = document.querySelector('.list_input');
const clearBtn = document.querySelector('.clear_completed');

function clearInputs() {
  inputField.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  task.addTask(task.taskList.length + 1, document.querySelector('.list_input').value);
  IL.checkCompleted(task.taskList);
  clearInputs();
});

list.addEventListener('click', (e) => {
  const target = e.target.closest('.fa fa-ellipsis-v');
  const trash = e.target.closest('.fa-trash-can');
  const description = e.target.closest('.description');

  if (target) {
    target.nextElementSibling.classList.toggle('show');
    target.style.display = 'none';
  }

  if (trash) {
    task.removeTask(Number(trash.id));
    IL.checkCompleted(task.taskList);
  }

  if (description && !description.classList.contains('blur_text')) {
    task.editTask(description);
  }
});

list.addEventListener('focusout', (e) => {
  const description = e.target.closest('.description');
  if (description) {
    task.displayEditedTask(description, Number(description.dataset.id));
    task.displayList();
  }
});

list.addEventListener('change', (e) => {
  const checkBox = e.target.closest('.check_item');
  if (checkBox) {
    IL.toggleCompleted(Number(checkBox.id), task.taskList, checkBox);
    checkBox.nextElementSibling.classList.toggle('blur_text');
    task.sortTasks();
    task.updateStorage();
  }
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  task.taskList = IL.clearCompleted(task.taskList);
  task.sortTasks();
  task.updateStorage();
  task.displayList();
});

window.addEventListener('DOMContentLoaded', () => IL.checkCompleted(task.taskList));

window.onload = task.displayList();