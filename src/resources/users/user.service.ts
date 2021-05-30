import * as usersRepo from './user.memory.repository';
import { IUser } from '../../types/IUser';

/**
 * User service module
 * @module User service
 */

/**
 * Function that get all users
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = ():Promise<IUser[]> => usersRepo.getAll();

/**
 * Create user
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns user
 */
const createUser = (data:Request):Promise<IUser> => usersRepo.createUser(data);

/**
 * Get user by id
 * @function
 * @param {string} data - User id
 * @returns {User} Returns user
 */
const getUser = (data:string):Promise<IUser> => usersRepo.getUser(data);

/**
 * Edit user data in base
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns  edited user
 */
const setUser = (userId:string, data:Request):Promise<IUser> => usersRepo.setUser(userId, data);

/**
 * Delete user
 * @function
 * @param {string} data - User id
 * @returns {User} Returns delete user
 */
const deleteUser = (data:string):Promise<IUser> => usersRepo.deleteUser(data);

export = { getAll, createUser, getUser, setUser, deleteUser };
