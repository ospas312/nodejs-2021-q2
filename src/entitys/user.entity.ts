import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';

import { config } from '../common/config';

const { JWT_SECRET_KEY } = config;

/**
* User model
* @typedef {Object} User
* @property {string} id - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User password
*/

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar',)
  name: string  = '';

  @Column('varchar')
  login!: string;

  @Column('varchar')
  password!: string;

  @BeforeInsert()
  generatePasswordHash() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  generateUserToken(){
    const token = jwt.sign({ userId: this.id, login: this.login }, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    return token
  }
}
