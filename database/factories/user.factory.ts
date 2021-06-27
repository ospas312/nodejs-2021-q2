import { define } from 'typeorm-seeding';
import { getRepository } from 'typeorm';
import { User } from '../../src/entitys/user.entity';

define(User, () => {
  const user = {
    name: 'admin',
    login: 'admin',
    password: 'admin',
  } as Omit<User, 'id'>;

  const userRepository = getRepository(User);
  //const userCreate = userRepository.create(user);
  //return userRepository.save(userCreate);
  return userRepository.create(user);
});