import { v4 as uuidv4 } from 'uuid';
import {Entity, Column, PrimaryColumn} from 'typeorm'

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
  @PrimaryColumn('varchar')
  id: string = uuidv4();

  @Column('varchar',)
  name: string  = '';

  @Column('varchar')
  login!: string;

  @Column('varchar')
  password!: string;

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
