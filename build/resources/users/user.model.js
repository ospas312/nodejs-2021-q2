"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
/**
* User model
* @typedef {Object} User
* @property {string} id - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User password
*/
class User {
    constructor({ id = uuid_1.v4(), name = 'USER', login = 'user', password = 'P@55w0rd' }) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.User = User;
