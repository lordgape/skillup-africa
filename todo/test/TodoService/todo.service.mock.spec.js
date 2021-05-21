const { expect } = require('chai');
const proxyquire = require('proxyquire');
const TodoService = require('../../services/TodoService');

const mockTodo = {
  id: 4,
  uniqueid: '44ab5833-fc4d-411b-b4b3-55dbc7bce49d',
  description: 'This is a test Todo',
  isCompleted: false,
  updatedAt: '2021-05-21T19:07:47.307Z',
  createdAt: '2021-05-21T19:07:47.307Z'
};

const modelStub = {};

describe('TodoService: Using mock database', () => {
  beforeEach(() => {
    proxyquire('../../services/TodoService', {
      '../models/sequelize': modelStub
    });

    modelStub.Todo.create = async function (description) {
      return mockTodo;
    };
  });

  it('Can create a Todo', async () => {
    let actual = await TodoService.createTodo('This is a test Todo');

    expect(actual).to.deep.equal(mockTodo);
  });
});
