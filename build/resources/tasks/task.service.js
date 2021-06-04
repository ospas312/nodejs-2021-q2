"use strict";
const tasksRepo = require('./task.memory.repository.ts');
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
