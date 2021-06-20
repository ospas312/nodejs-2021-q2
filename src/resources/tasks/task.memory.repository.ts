import { getRepository } from "typeorm";
import { Task } from "../../entitys/task.entity";

/**
 * Function that get all task
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Task>} - Returns all tasks
 */
const getAll = async (boardId:string):Promise<Task[]> => {
    const taskRepository = getRepository(Task);
    return taskRepository.find({boardId});
} 

/**
 * Function create task
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {Task} body - data task
 * @returns {Array<Task>} - Returns create tasks
 */
const createTask = async (boardId:string, data:Task):Promise<Task> => {
    const taskRepository = getRepository(Task);
    const taskData = { ...data, boardId };
    const task = await taskRepository.create(taskData);
    return taskRepository.save(task);
};

/**
 * Function get task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the searched task
 */
const getTask = async (boardId:string, taskId:string):Promise<Task | null> => {
    const taskRepository = getRepository(Task);
    const task = await taskRepository.findOne({boardId, id: taskId});
    if (!task) return null
    return task
}

/**
 * Function edit task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @param {Task} body - data task
 * @returns {Task} Returns the searched task
 */
const setTask = async (boardId:string, taskId:string, data:Task): Promise<Task | null> => {
    const taskRepository = getRepository(Task);
    const task = await taskRepository.findOne({boardId, id: taskId});
    if (!task) return null
    const updateTask = await taskRepository.update({boardId, id: taskId}, data);
    return updateTask.raw;
};

/**
 * Function delete task by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {string|number} taskId - task id
 * @returns {Task} Returns the delete task
 */
const deleteTask = async (boardId:string, taskId:string):Promise<Task | null> => {
    const taskRepository = getRepository(Task);
    const task = await taskRepository.findOne({boardId, id: taskId});
    if (!task) return null
    await taskRepository.delete({boardId, id: taskId});
    return task
};

export default { getAll, createTask, getTask, setTask, deleteTask };