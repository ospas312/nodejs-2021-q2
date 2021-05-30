const Task = require("./task.model");

const TASKS = [];

const getAll = async (boardId) => TASKS.filter(i => i.boardId === boardId);
const createTask = async (boardId, body) => {
    const task = new Task({
        title: body.title,
        order: body.order,
        description: body.description,
        userId: body.userId,
        boardId,
        columnId: body.columnId
    });
    TASKS.push(task)
    return task
};
const getTask = async (boardId, taskId) => TASKS.find(i => i.id===taskId && i.boardId === boardId);
const setTask = async (boardId, taskId, body) => {
    const index = TASKS.findIndex(i => i.id===taskId && i.boardId === boardId);
    TASKS[index].title = body.title;
    TASKS[index].order = body.order;
    TASKS[index].description = body.description;
    TASKS[index].userId = body.userId;
    TASKS[index].boardId = boardId;
    TASKS[index].columnId = body.columnId;
    return  TASKS[index]
};
const deleteTask = async (boardId, taskId) => {
    const index = TASKS.findIndex(i => i.id===taskId && i.boardId === boardId)
    const task = TASKS[index]
    TASKS.splice(index,1)
    return task
};
const userDelete = async (userId) => {
    for (let i =0; i<TASKS.length; i+=1){
        if (TASKS[i].userId === userId){
            TASKS[i].userId = null;
        }
    }
}
const deleteBoardTask = async (id) => {
    for (let i = TASKS.length-1; i>=0; i-=1){
        if (TASKS[i].boardId === id){
            TASKS.splice(i,1)
        }
    }
}

module.exports = { getAll, createTask, getTask, setTask, deleteTask, userDelete, deleteBoardTask };