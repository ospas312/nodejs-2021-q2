import { v4 as uuidv4 } from 'uuid';

/**
* Task model
* @typedef {Object} Task
* @property {string|number} id - Task id
* @property {string} title - Task title
* @property {number} order - Task order
* @property {string} description - Task description
* @property {string|number} taskId - Task id
* @property {string|number} boardId - Board id
* @property {string|number} columnId - Column id
*/

export class Task {
  constructor({
    id = uuidv4(),
    title = 'task',
    order = 0,
    description = '',
    userId = '',
    boardId = '',
    columnId = '',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
