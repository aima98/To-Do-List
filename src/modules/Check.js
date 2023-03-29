import getFromStorage from './Storage.js';

const checkCompleted = (id) => {
  const allTasks = JSON.parse(getFromStorage('todo'));

  allTasks.forEach((task) => {
    if (task.index === id) {
      task.completed = !task.completed;
    }
  });

  localStorage.setItem('todo', JSON.stringify(allTasks));
  return JSON.parse(getFromStorage('todo'));
};

export default checkCompleted;