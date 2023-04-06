/**
 * @jest-environment jsdom
 */
// Import the function to be tested
import InteractiveList from './src/modules/InteractiveList.js';

describe('InteractiveList', () => {
  let elemMock;
  let localStorageMock;

  beforeEach(() => {
    elemMock = [
      { index: 1, description: 'Task 1', completed: true },
      { index: 2, description: 'Task 2', completed: false },
      { index: 3, description: 'Task 3', completed: true },
    ];

    localStorageMock = {
      getItem: jest.fn(() => JSON.stringify(elemMock)),
      setItem: jest.fn(),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('clearCompleted', () => {
    it('should remove all completed tasks from the list', () => {
      // Arrange
      const expected = [{ index: 1, description: 'Task 2', completed: false }];

      // Act
      const result = new InteractiveList().clearCompleted(elemMock);

      // Assert
      expect(result).toEqual(expected);
    });

    it('should update the index of the remaining tasks', () => {
      // Arrange
      const expected = [
        { index: 1, description: 'Task 1', completed: true },
        { index: 2, description: 'Task 2', completed: false },
      ];

      // Act
      const result = new InteractiveList().clearCompleted(elemMock);

      // Assert
      expect(result).toEqual(expected);
    });

    it('should update localStorage', () => {
      // Act
      new InteractiveList().clearCompleted(elemMock);

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'taskList',
        JSON.stringify([{ index: 1, description: 'Task 2', completed: false }])
      );
    });
  });
});
