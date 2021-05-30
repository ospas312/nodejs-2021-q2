const tasksRepo = require('./task.memory.repository');

const getAll = (id) => tasksRepo.getAll(id);
const createTask = (boardId, body) => tasksRepo.createTask(boardId, body);
const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);
const setTask = (boardId, taskId, body) => tasksRepo.setTask(boardId, taskId, body);
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAll, createTask, getTask, setTask, deleteTask };