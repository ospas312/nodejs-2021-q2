import tasksRepo from './task.memory.repository';
import { Task } from '../../entitys/task.entity';

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
const getAll = async (id:string): Promise<Task[]> => tasksRepo.getAll(id);

/**
 * Function create task
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Task} - Returns create tasks
 */
const createTask = async(boardId: string, body:Task): Promise<Task> => tasksRepo.createTask(boardId, body);

/**
 * Function get task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = async(boardId: string, taskId:string): Promise<Task | null> => tasksRepo.getTask(boardId, taskId);

/**
 * Function edit task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the edited task
 */
const setTask = async(boardId:string, taskId:string, body:Task): Promise<Task | null> => tasksRepo.setTask(boardId, taskId, body);

/**
 * Function delete task by id
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = async(boardId:string, taskId:string): Promise<Task | null> => tasksRepo.deleteTask(boardId, taskId);

export default { getAll, createTask, getTask, setTask, deleteTask };