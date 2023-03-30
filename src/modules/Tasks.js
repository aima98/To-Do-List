import getFromStorage from './Storage.js';

export default class Tasks {
  constructor(description, completed, index) {
    this.allTasks = JSON.parse(getFromStorage('todo')) || [];
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask = (formDesc, formCompleted, formIndex) => {
    const newTask = new Tasks(formDesc, formCompleted, formIndex);
    this.allTasks.push(newTask);
    localStorage.setItem('todo', JSON.stringify(this.allTasks));
  }
}