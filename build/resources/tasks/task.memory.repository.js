"use strict";
const Task = require("./task.model.ts");
/**
 * Task repository module
 * @module Task repository
 */
const TASKS = [];
/**
 * Function that get all task
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Task>} - Returns all tasks
 */
const getAll = async (boardId) => TASKS.filter(i => i.boardId === boardId);
/**
 * Function create task
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Array<Task>} - Returns create tasks
 */
const createTask = async (boardId, body) => {
    const task = new Task({
        title: body.title,
        order: body.order,
        description: body.description,
        userId: body.userId,
        boardId,
        columnId: body.columnId
    });
    TASKS.push(task);
    return task;
};
/**
 * Function get task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = async (boardId, taskId) => TASKS.find(i => i.id === taskId && i.boardId === boardId);
/**
 * Function edit task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the searched task
 */
const setTask = async (boardId, taskId, body) => {
    const index = TASKS.findIndex(i => i.id === taskId && i.boardId === boardId);
    TASKS[index].title = body.title;
    TASKS[index].order = body.order;
    TASKS[index].description = body.description;
    TASKS[index].userId = body.userId;
    TASKS[index].boardId = boardId;
    TASKS[index].columnId = body.columnId;
    return TASKS[index];
};
/**
 * Function delete task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = async (boardId, taskId) => {
    const index = TASKS.findIndex(i => i.id === taskId && i.boardId === boardId);
    const task = TASKS[index];
    TASKS.splice(index, 1);
    return task;
};
/**
 * Function delete user id
 * @async
 * @function
 * @param {string|number} userId - user id
 * @returns {void}
 */
const userDelete = async (userId) => {
    for (let i = 0; i < TASKS.length; i += 1) {
        if (TASKS[i].userId === userId) {
            TASKS[i].userId = null;
        }
    }
};
/**
 * Function delete tasks board
 * @async
 * @function
 * @param {string|number} id - board id
 * @returns {void}
 */
const deleteBoardTask = async (id) => {
    for (let i = TASKS.length - 1; i >= 0; i -= 1) {
        if (TASKS[i].boardId === id) {
            TASKS.splice(i, 1);
        }
    }
};
module.exports = { getAll, createTask, getTask, setTask, deleteTask, userDelete, deleteBoardTask };
