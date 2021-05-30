const usersRepo = require('./user.memory.repository.ts');

/**
 * User service module
 * @module User service
 */

/**
 * Function that get all users
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Create user
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns user
 */
const createUser = (data) => usersRepo.createUser(data);

/**
 * Get user by id
 * @function
 * @param {string} data - User id
 * @returns {User} Returns user
 */
const getUser = (data) => usersRepo.getUser(data);

/**
 * Edit user data in base
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns  edited user
 */
const setUser = (userId, data) => usersRepo.setUser(userId, data);

/**
 * Delete user
 * @function
 * @param {string} data - User id
 * @returns {User} Returns delete user
 */
const deleteUser = (data) => usersRepo.deleteUser(data);

module.exports = { getAll, createUser, getUser, setUser, deleteUser };
