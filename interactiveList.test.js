/**
 * @jest-environment jsdom
 */
// Import the function to be tested
import InteractiveList from './src/modules/InteractiveList.js';
import Helpers from './src/modules/Structure.js';

describe('status and content updates', () => {
  const task = new Helpers();
  const app = new InteractiveList();

  test('editing task items', () => {
    document.body.innerHTML = '<ul class="list"></ul>';
    task.addTask(task.taskList.length + 1, 'Task 1');
    task.editTaskList('Edit task', 1);
    expect(task.taskList[0].description).toBe('Edit task');
  });

  test('check completed status', () => {
    document.body.innerHTML = "<input class='check' type='checkbox' checked>";
    const item = document.querySelector('.check');
    app.toggleCompleted(1, task.taskList, item);
    expect(task.taskList[0].completed).toBe(true);
  });

  test('clear all completed', () => {
    task.taskList = app.clearCompleted(task.taskList);
    expect(task.taskList).toHaveLength(0);
  });
});