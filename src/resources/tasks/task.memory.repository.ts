import { Task } from "./task.model";
import { ITask } from "../../types/ITask";

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
const getAll = async (boardId:string):Promise<ITask[]> => TASKS.filter(i => i.boardId === boardId);

/**
 * Function create task
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Array<Task>} - Returns create tasks
 */
const createTask = async (boardId:string, {title, order, description, userId, columnId}:ITask):Promise<ITask> => {
    const task = new Task({
        title,
        order,
        description,
        userId,
        boardId,
        columnId
    });
    TASKS.push(task)
    return task
};

/**
 * Function get task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = async (boardId:string, taskId:string):Promise<ITask> => TASKS.find(i => i.id===taskId && i.boardId === boardId);

/**
 * Function edit task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the searched task
 */
const setTask = async (boardId:string, taskId:string, {title, order, description, userId, columnId}:ITask):Promise<ITask> => {
    const index = TASKS.findIndex(i => i.id===taskId && i.boardId === boardId);
    TASKS[index].title = title;
    TASKS[index].order = order;
    TASKS[index].description = description;
    TASKS[index].userId = userId;
    TASKS[index].boardId = boardId;
    TASKS[index].columnId = columnId;
    return  TASKS[index]
};

/**
 * Function delete task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = async (boardId:string, taskId:string):Promise<ITask> => {
    const index = TASKS.findIndex(i => i.id===taskId && i.boardId === boardId)
    const task = TASKS[index]
    TASKS.splice(index,1)
    return task
};

/**
 * Function delete user id 
 * @async
 * @function
 * @param {string|number} userId - user id
 * @returns {void}
 */
const userDelete = async (userId:string):Promise<void> => {
    for (let i =0; i<TASKS.length; i+=1){
        if (TASKS[i].userId === userId){
            TASKS[i].userId = null;
        }
    }
}

/**
 * Function delete tasks board
 * @async
 * @function
 * @param {string|number} id - board id
 * @returns {void}
 */
const deleteBoardTask = async (id:string):Promise<void> => {
    for (let i = TASKS.length-1; i>=0; i-=1){
        if (TASKS[i].boardId === id){
            TASKS.splice(i,1)
        }
    }
}

export = { getAll, createTask, getTask, setTask, deleteTask, userDelete, deleteBoardTask };