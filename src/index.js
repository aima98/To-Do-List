import './style.css';

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

const tasks = allTasks.map((todo) => ` 
  <div class="tasks">
    <div class="task"><input type="checkbox" id="demoCheckbox" name="checkbox" value="1">
      <label for="demoCheckbox">${todo.description}</label>
    </div>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
  </div>
  `).join('');

tasksListDisplay.innerHTML = tasks;