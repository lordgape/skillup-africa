const { expect } = require('chai');
const TodoService = require('../services/TodoService');
const sequelizeMock = require('sequelize-mock');
const proxyquire = require('proxyquire');

const dbMock = new sequelizeMock();

const StubTodoModel = dbMock.define('Todo', {
  id: 4,
  uniqueid: '7ff6efce-12f6-4728-912d-ef8b148a4033',
  description: 'This is a test Todo',
  iscompleted: false,
  updatedAt: '2021-05-20T16:52:16.850Z',
  createdAt: '2021-05-20T16:52:16.850Z'
});

const mockTodoModel = {
  id: 4,
  uniqueid: '7ff6efce-12f6-4728-912d-ef8b148a4033',
  description: 'This is a test Todo',
  iscompleted: false,
  updatedAt: '2021-05-20T16:52:16.850Z',
  createdAt: '2021-05-20T16:52:16.850Z'
};

const modelStub = {};

describe('Todo', () => {
  beforeEach(() => {
    proxyquire('../services/TodoService', {
      '../models/sequelize': modelStub
    });

    modelStub.Todo.create = function (options) {
      return mockTodoModel;
    };
  });

  it('Can create todo', async () => {
    let result = await TodoService.createTodo('This is a test Todo');
    // let result = await StubTodoModel.findOne({where: {id: 4}});
    console.log('result', result);
    // result = result.get({ plain: true });
    // result = result._defaults;

    expect(result).deep.equal(mockTodoModel);
  });
});
