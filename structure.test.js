/**
 * @jest-environment jsdom
 */
import Helpers from './src/modules/Structure.js';

describe('add list item', () => {
  const task = new Helpers();
  document.body.innerHTML = '<ul class="list"></ul>';
  task.addTask(task.taskList.length + 1, 'Task 1');

  test('Add task to list', () => {
    expect(task.taskList).toHaveLength(1);
  });

  test('Add task to DOM', () => {
    const listContainer = document.querySelectorAll('.list');
    expect(listContainer).toHaveLength(1);
  });
});