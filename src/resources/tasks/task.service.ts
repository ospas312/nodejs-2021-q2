import * as tasksRepo  from './task.memory.repository';
import { ITask } from '../../types/ITask';

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
const getAll = (id:string):Promise<ITask[]> => tasksRepo.getAll(id);

/**
 * Function create task
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Task} - Returns create tasks
 */
const createTask = (boardId: string, body:Request):Promise<ITask> => tasksRepo.createTask(boardId, body);

/**
 * Function get task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = (boardId: string, taskId:string):Promise<ITask[]> => tasksRepo.getTask(boardId, taskId);

/**
 * Function edit task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the edited task
 */
const setTask = (boardId:string, taskId:string, body:Request):Promise<ITask[]> => tasksRepo.setTask(boardId, taskId, body);

/**
 * Function delete task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = (boardId:string, taskId:string):Promise<ITask> => tasksRepo.deleteTask(boardId, taskId);

export = { getAll, createTask, getTask, setTask, deleteTask };