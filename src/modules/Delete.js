const deleteTask = (id) => {
  const listDisplay = document.querySelector('.display-list');
  let allTasks = JSON.parse(localStorage.getItem('todo'));
  const ul = document.querySelector('.tasks-list');

  allTasks = allTasks.filter((task) => task.index !== id);
  allTasks.forEach((i, j) => {
    i.index = j;
  });

  allTasks = localStorage.setItem('todo', JSON.stringify(allTasks));
  listDisplay.removeChild(ul);
};

export default deleteTask;