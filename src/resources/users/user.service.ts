import usersRepo from './user.memory.repository';
import { IUser } from '../../types/IUser';
// const usersRepo = require('./user.memory.repository');
/**
 * User service module
 * @module User service
 */

/**
 * Function that get all users
 * @function
 * @returns {Promise<Array<IUser>>} - Returns all users
 */
const getAll = async(): Promise<Array<IUser>> => usersRepo.getAll()

/**
 * Create user
 * @function
 * @param {User} body - User data
 * @returns {User} - Returns user
 */
const createUser = async(body : IUser):Promise<IUser> => usersRepo.createUser(body);

/**
 * Get user by id
 * @function
 * @param {string} data - User id
 * @returns {User} Returns user
 */
const getUser = (data:string): Promise<IUser | undefined> => usersRepo.getUser(data);

/**
 * Edit user data in base
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns  edited user
 */
const setUser = (userId:string, data:IUser):Promise<IUser | undefined> => usersRepo.setUser(userId, data);

/**
 * Delete user
 * @function
 * @param {string} data - User id
 * @returns {Promise<IUser>} Returns delete user
 */
const deleteUser = async (data:string): Promise<IUser | undefined> => usersRepo.deleteUser(data);

export default { getAll, createUser, getUser, setUser, deleteUser };
