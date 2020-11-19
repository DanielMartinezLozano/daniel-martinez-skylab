const userController = require('./userController');
const userSchema = require('../models/userSchema');

jest.mock('../models/userSchema');

describe('userController functions', () => {
  let res;
  let req;
  let controller;
  beforeEach(() => {
    controller = userController(userSchema);
    res = { send: jest.fn() };
    req = { body: null };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getUsersMethod', () => {
    beforeEach(() => {
      const error = true;

      userSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, null);
          }),
        }),
      });
    });

    test('should call res.find', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find).toHaveBeenCalled();
    });

    test('should call populate', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find().populate).toHaveBeenCalled();
    });

    test('should call exec', () => {
      controller.getUsersMethod(null, res);

      expect(userSchema.find().populate().exec).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.getUsersMethod(null, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;
      userSchema.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementation((callback) => {
            callback(error, 'data');
          }),
        }),
      });
      controller.getUsersMethod(null, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });

  describe('postUsersMethod', () => {
    beforeEach(() => {
      const error = true;

      userSchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, null);
      });
    });

    test('should call res.create', () => {
      controller.postUsersMethod(req, res);

      expect(userSchema.create).toHaveBeenCalled();
    });

    test('should call res.send with the error', () => {
      controller.postUsersMethod(req, res);

      expect(res.send).toHaveBeenCalledWith(true);
    });

    test('should call res.send with the data if there is no error', () => {
      const error = false;

      userSchema.create = jest.fn().mockImplementation((data, callback) => {
        callback(error, 'data');
      });
      controller.postUsersMethod(req, res);

      expect(res.send).toHaveBeenCalledWith('data');
    });
  });
});
