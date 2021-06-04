"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
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
class Task {
    constructor({ id = uuid_1.v4(), title = 'task', order = 0, description = '', userId = '', boardId = '', columnId = '', }) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
exports.Task = Task;
