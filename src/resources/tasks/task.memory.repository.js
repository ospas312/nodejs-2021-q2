const Task = require("./task.model");

const TASKS = [];

const getAll = async () => TASKS;
const createTask = async (boardId, body) => {
    const task = new Task({
        title: body.title,
        order: body.order,
        description: body.description,
        userId: body.userId,
        boardId: body.boardId,
        columnId: body.columnId
    });
    TASKS.push(task)
    return task
};
const getTask = async (boardId, taskId) => TASKS.find(i => i.id === taskId);
const setTask = async (boardId, taskId, body) => {
    const index = TASKS.findIndex(i => i.id===taskId);
    TASKS[index].title = body.title;
    TASKS[index].order = body.order;
    TASKS[index].description = body.description;
    TASKS[index].userId = body.userId;
    TASKS[index].boardId = body.boardId;
    TASKS[index].columnId = body.columnId;
    return  TASKS[index]
};
const deleteTask = async (boardId, taskId) => {
    const index = TASKS.findIndex(i => i.id === taskId)
    const task = TASKS[index]
    TASKS.splice(index,1)
    return task
};

module.exports = { getAll, createTask, getTask, setTask, deleteTask };