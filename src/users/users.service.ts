import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, DeleteResult } from 'typeorm';
import { User } from 'src/entities/user.entity';

import { Task } from 'src/entities/task.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.find({});
    const result = users;
    return result;
  }

  async createUser(body: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(body);
    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async getUser(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) return null;
    return user;
  }

  async updateUser(id: string, body: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) return null;
    const updateUser = await this.userRepository.update(id, body);
    return updateUser.raw;
  }

  async deleteUser(id: string): Promise<DeleteResult | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) return null;
    await this.connection
      .getRepository(Task)
      .createQueryBuilder('task')
      .update(Task)
      .set({
        userId: null,
      })
      .where('userId = :userId', { userId: id })
      .execute();

    return this.userRepository.delete(id);
  }

  async getByLogin(login: string): Promise<User | null | IUser> {
    const user = await this.userRepository.findOne({ login });
    if (!user) return null;
    return user;
  }

  async getByLoginTest(login: string): Promise<IUser | null> {
    const user = await this.userRepository.findOne({ login });
    if (!user) return null;
    return user;
  }
}
