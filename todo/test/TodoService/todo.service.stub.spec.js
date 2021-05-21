const { expect } = require('chai');
const sequelizeMock = require('sequelize-mock');
const proxyquire = require('proxyquire');
const TodoService = require('../../services/TodoService');

const databaseMock = new sequelizeMock();

const modelTodoStub = databaseMock.define(
  'Todo',
  {
    id: 4,
    uniqueid: '44ab5833-fc4d-411b-b4b3-55dbc7bce49d',
    description: 'This is a test Todo',
    isCompleted: false,
    updatedAt: '2021-05-21T19:07:47.307Z',
    createdAt: '2021-05-21T19:07:47.307Z'
  },
  {
    instanceMethods: {
      getModel: function () {
        return {
          id: this.get('id'),
          uniqueid: this.get('uniqueid'),
          description: this.get('description'),
          isCompleted: this.get('isCompleted'),
          updatedAt: this.get('updatedAt'),
          createdAt: this.get('createdAt')
        };
      }
    }
  }
);

const modelStub = {};

describe('TodoService: Using Stub Database', () => {
  beforeEach(() => {
    proxyquire('../../services/TodoService', {
      '../models/sequelize': modelStub
    });

    modelStub.Todo.create = async function (options) {
      return modelTodoStub.create({
        uniqueid: '44ab5833-fc4d-411b-b4b3-55dbc7bce49d',
        description: 'This is a test Todo',
        isCompleted: false
      });
    };
  });

  it('Can create a Todo', async () => {
    let actual = await TodoService.createTodo('This is a test Todo');
    let expected = await modelTodoStub.create('This is a test Todo');

    expect(actual.getModel()).to.deep.equal(expected.getModel());
  });
  
  it('should fail if no description was pass', async () => {
    try {
      await TodoService.createTodo('');
    } catch (error) {
      expect(error.message).to.equal('Description is required');
    }
  });
});
