import tasksRepo from './task.memory.repository';
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
const getAll = async (id:string): Promise<Array<ITask>> => tasksRepo.getAll(id);

/**
 * Function create task
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Task} - Returns create tasks
 */
const createTask = async(boardId: string, body:ITask): Promise<ITask> => tasksRepo.createTask(boardId, body);

/**
 * Function get task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = async(boardId: string, taskId:string): Promise<ITask | undefined> => tasksRepo.getTask(boardId, taskId);

/**
 * Function edit task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the edited task
 */
const setTask = async(boardId:string, taskId:string, body:ITask): Promise<ITask | undefined> => tasksRepo.setTask(boardId, taskId, body);

/**
 * Function delete task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = async(boardId:string, taskId:string): Promise<ITask | undefined> => tasksRepo.deleteTask(boardId, taskId);

export default { getAll, createTask, getTask, setTask, deleteTask };