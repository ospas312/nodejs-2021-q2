import { define } from 'typeorm-seeding';
import { getRepository } from 'typeorm';
import { User } from '../../src/entities/user.entity';

define(User, () => {
  const user = {
    name: 'admin',
    login: 'admin',
    password: 'admin',
  } as Omit<User, 'id'>;

  const userRepository = getRepository(User);
  return userRepository.create(user);
});
