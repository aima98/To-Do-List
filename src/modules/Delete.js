export default class Delete {
  constructor() {
    this.allTasks = JSON.parse(localStorage.getItem('todo')) || [];
  }

  deleteTask = (id) => {
    const listDisplay = document.querySelector('.display-list');
    const ul = document.querySelector('.tasks-list');

    this.allTasks = this.allTasks.filter((task) => task.index !== id);
    this.allTasks.forEach((i, j) => {
      i.index = j;
    });

    localStorage.setItem('todo', JSON.stringify(this.allTasks));
    listDisplay.removeChild(ul);
  };
}