const deleteTask = (id) => {
  const listDisplay = document.querySelector('.display-list');
  let allTasks = JSON.parse(localStorage.getItem('todo'));
  const btn = document.getElementById(`btn-${id}`);
  allTasks = allTasks.filter((task) => task.index !== id);

  allTasks.forEach((i, j) => {
    i.index = j;
  });

  allTasks = localStorage.setItem('todo', JSON.stringify(allTasks));
  btn.parentElement.parentElement.remove();

  if (allTasks.length === 0) {
    listDisplay.innerHTML = '<hr/><p>No tasks are available now!</p>';
  }
};

export default deleteTask;