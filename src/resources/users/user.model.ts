import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../../types/IUser';

/**
* User model
* @typedef {Object} User
* @property {string} id - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User password
*/

export class User {
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }:IUser) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user:IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
