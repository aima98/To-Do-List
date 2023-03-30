import getFromStorage from './Storage.js';

const allTasks = JSON.parse(getFromStorage('todo')) || [];

export default class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask = (formDesc, formCompleted, formIndex) => {
    const newTask = new Tasks(formDesc, formCompleted, formIndex);
    allTasks.push(newTask);
    localStorage.setItem('todo', JSON.stringify(allTasks));
  }
}