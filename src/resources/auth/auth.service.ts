import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { User } from "../../entitys/user.entity";

const findUserLogin = async (login: string, password: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(login);

  if (!user) return null;
  const pass = await bcrypt.compare(password, user.password);
  if (!pass) return null;
  return user;
};

export default { findUserLogin };