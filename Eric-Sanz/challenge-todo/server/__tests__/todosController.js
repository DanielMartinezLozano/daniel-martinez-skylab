const Todo = require('../src/models/todoModel');
const todosController = require('../src/controllers/todosController')(Todo);

jest.mock('../src/models/todoModel');

describe('todosController', () => {
  afterEach(() => {
    Todo.mockRestore();
  });

  describe('getMethod', () => {
    test('should call res json on getMethod', () => {
      const res = {
        json: jest.fn(),
      };

      Todo.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });

      todosController.getMethod({}, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call res send in the getMethod', () => {
      const res = {
        send: jest.fn(),
      };

      Todo.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      todosController.getMethod({}, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putMethod', () => {
    test('Should ');
  });
});
