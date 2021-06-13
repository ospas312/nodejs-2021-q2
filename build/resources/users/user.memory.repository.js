"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const user_model_1 = require("./user.model");
const tasksRepo = __importStar(require("../tasks/task.memory.repository"));
/**
 * User repository
 * @module User repository
 */
const USERS = [{
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
    }];
/**
 * Function that get all users
 * @async
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = async () => USERS;
/**
 * Function create user
 * @async
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns create user
 */
const createUser = async ({ login, name, password }) => {
    const user = new user_model_1.User({
        name,
        login,
        password
    });
    USERS.push(user);
    return user;
};
/**
 * Function get user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} - Returns create user
 */
const getUser = async (userId) => USERS.find(i => i.id === userId);
/**
 * Function edit user by id
 * @async
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns create user
 */
const setUser = async (userId, { login, name, password }) => {
    const index = USERS.findIndex(i => i.id === userId);
    USERS[index].name = name;
    USERS[index].login = login;
    USERS[index].password = password;
    return USERS[index];
};
/**
 * Delete user
 * @async
 * @function
 * @param {string} userId - User id
 * @returns {User} Returns delete user
 */
const deleteUser = async (userId) => {
    const index = USERS.findIndex(i => i.id === userId);
    const user = USERS[index];
    USERS.splice(index, 1);
    tasksRepo.userDelete(userId);
    return user;
};
module.exports = { getAll, createUser, getUser, setUser, deleteUser };
