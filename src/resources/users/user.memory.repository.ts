import { User } from "./user.model";
import tasksRepo from '../tasks/task.memory.repository';
import { IUser } from "../../types/IUser";

/**
 * User repository 
 * @module User repository
 */

const USERS: IUser[] = [{
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
const getAll = async (): Promise<Array<IUser>> => USERS;

/**
 * Function create user
 * @async
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns create user
 */
const createUser = async ( data : IUser) => {
  const user = new User(data)
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
const getUser = async (userId:string): Promise<IUser | undefined> => USERS.find(i => i.id === userId);

/**
 * Function edit user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns create user
 */
const setUser = async (userId:string, data: IUser): Promise<IUser | undefined>  => {
  const index = USERS.findIndex(i => i.id===userId)
  USERS[index] = data;
  return  USERS[index]
  /* USERS.forEach((i, index) =>{
    if (i.id===userId){
      USERS[index] = data;
      return USERS[index]
    }
  }) */
};

/**
 * Delete user
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} Returns delete user
 */
const deleteUser = async (userId:string): Promise<IUser | undefined> => {
  const index = USERS.findIndex(i => i.id===userId)
  const user = USERS[index]
  USERS.splice(index,1)
  await tasksRepo.userDelete(userId)
  return user
};

export default { getAll, createUser, getUser, setUser, deleteUser };
