import { User } from "./user.model";
import * as tasksRepo from '../tasks/task.memory.repository';
import { IUser } from "../../types/IUser";

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
const getAll = async ():Promise<IUser[]> => USERS;

/**
 * Function create user
 * @async
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns create user
 */
const createUser = async ({ login, name, password }: IUser):Promise<IUser[]> => {
  const user = new User({
    name,
    login,
    password
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
const getUser = async (userId:string):Promise<IUser[]> => USERS.find(i => i.id === userId);

/**
 * Function edit user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns create user
 */
const setUser = async (userId:string, { login, name, password }: IUser) => {
  const index = USERS.findIndex(i => i.id===userId)
  USERS[index].name = name
  USERS[index].login = login
  USERS[index].password = password
  return  USERS[index]
};

/**
 * Delete user
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} Returns delete user
 */
const deleteUser = async (userId:string) => {
  const index = USERS.findIndex(i => i.id===userId)
  const user = USERS[index]
  USERS.splice(index,1)
  tasksRepo.userDelete(userId)
  return user
};


export = { getAll, createUser, getUser, setUser, deleteUser };
