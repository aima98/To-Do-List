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

describe('remove item', () => {
  let taskList;

  beforeEach(() => {
    taskList = [      { index: 1, description: 'Task 1' },      { index: 2, description: 'Task 2' },      { index: 3, description: 'Task 3' },    ];
  });

  it('should remove the task with the given index from the task list', () => {
    const app = new Helpers();
    app.taskList = taskList;
    const indexToRemove = 2;
    app.removeTask(indexToRemove);
    expect(app.taskList).toEqual([
      { index: 1, description: 'Task 1' },
      { index: 2, description: 'Task 3' },
    ]);
  });

  it('should update the index of the remaining tasks', () => {
    const app = new Helpers();
    app.taskList = taskList;
    const indexToRemove = 2;
    app.removeTask(indexToRemove);
    expect(app.taskList[0].index).toBe(1);
    expect(app.taskList[1].index).toBe(2);
  });

  it('should sort the tasks by index after removing one', () => {
    const app = new Helpers();
    app.taskList = taskList;
    const indexToRemove = 2;
    app.removeTask(indexToRemove);
    expect(app.taskList).toEqual([
      { index: 1, description: 'Task 1' },
      { index: 2, description: 'Task 3' },
    ]);
  });

  it('should update the storage and display the list after removing a task', () => {
    const app = new Helpers();
    app.taskList = taskList;
    app.updateStorage = jest.fn();
    app.displayList = jest.fn(); 
    app.removeTask(2);
    expect(app.updateStorage).toHaveBeenCalled();
    expect(app.displayList).toHaveBeenCalled();
  });
});
