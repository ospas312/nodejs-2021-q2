import { getRepository } from 'typeorm'
import { User } from "./user.entity";
import { Task } from '../tasks/task.entity';

/**
 * Function that get all users
 * @async
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = async (): Promise<User[]> => {
  const userRepository = getRepository(User);
  return userRepository.find({where:{}});
};

/**
 * Function create user
 * @async
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns create user
 */
const createUser = async ( data : User): Promise<User> => {
  const userRepository = getRepository(User);
  const user = userRepository.create(data);
  return userRepository.save(user);
};
/**
 * Function get user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} - Returns create user
 */
const getUser = async (userId:string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  if (!user) return null;
  return user;
}
/**
 * Function edit user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns create user
 */
const setUser = async (userId:string, data: User): Promise<User | null>  => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  if (!user) return null;
  const updateUser = await userRepository.update(userId, data)
  return updateUser.raw;

};
/**
 * Delete user
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} Returns delete user
 */
const deleteUser = async (userId:string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  if (!user) return null;
  await userRepository.delete(userId)

  const taskRepository = getRepository(Task);
  await taskRepository.update({ userId }, { userId: null });

  return user;
};

export default { getAll, createUser, getUser, setUser, deleteUser };
