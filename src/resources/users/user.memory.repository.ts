const User = require('./user.model.ts');
const tasksRepo = require('../tasks/task.memory.repository.ts');

/**
 * User repository 
 * @module User repository
 */

const USERS = [{
  id: "4cff2d17-a18f-48f7-8975-b1a91db78879",
  name: "string",
  login: "string",
  password: "string",
},
{
  id: "a6ec866c-eb51-48ac-ba59-0224e355e716",
  name: "user",
  login: "user",
  password: "user",
}]

/**
 * Function that get all users
 * @async
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = async () => USERS;

/**
 * Function create user
 * @async
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns create user
 */
const createUser = async (data) => {
  const user = new User({
    name: data.name,
    login: data.login,
    password: data.password
  })
  USERS.push(user)
  return user;
};
/**
 * Function get user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} - Returns create user
 */
const getUser = async (userId) => USERS.find(i => i.id === userId);

/**
 * Function edit user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns create user
 */
const setUser = async (userId, data) => {
  const index = USERS.findIndex(i => i.id===userId)
  USERS[index].name = data.name
  USERS[index].login = data.login
  USERS[index].password = data.password
  return  USERS[index]
};

/**
 * Delete user
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} Returns delete user
 */
const deleteUser = async (userId) => {
  const index = USERS.findIndex(i => i.id===userId)
  const user = USERS[index]
  USERS.splice(index,1)
  tasksRepo.userDelete(userId)
  return user
};


module.exports = { getAll, createUser, getUser, setUser, deleteUser };
