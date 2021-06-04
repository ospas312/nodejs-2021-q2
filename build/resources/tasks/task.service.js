"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const tasksRepo = __importStar(require("./task.memory.repository"));
/**
 * Task service module
 * @module Task service
 */
/**
 * Function that get all task
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Task>} - Returns all tasks
 */
const getAll = (id) => tasksRepo.getAll(id);
/**
 * Function create task
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Task} - Returns create tasks
 */
const createTask = (boardId, body) => tasksRepo.createTask(boardId, body);
/**
 * Function get task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);
/**
 * Function edit task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the edited task
 */
const setTask = (boardId, taskId, body) => tasksRepo.setTask(boardId, taskId, body);
/**
 * Function delete task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);
module.exports = { getAll, createTask, getTask, setTask, deleteTask };
