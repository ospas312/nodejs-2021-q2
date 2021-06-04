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
const usersRepo = __importStar(require("./user.memory.repository"));
/**
 * User service module
 * @module User service
 */
/**
 * Function that get all users
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = () => usersRepo.getAll();
/**
 * Create user
 * @function
 * @param {User} data - User data
 * @returns {User} - Returns user
 */
const createUser = (data) => usersRepo.createUser(data);
/**
 * Get user by id
 * @function
 * @param {string} data - User id
 * @returns {User} Returns user
 */
const getUser = (data) => usersRepo.getUser(data);
/**
 * Edit user data in base
 * @function
 * @param {string} userId - User id
 * @param {User} data - User data new
 * @returns {User} - Returns  edited user
 */
const setUser = (userId, data) => usersRepo.setUser(userId, data);
/**
 * Delete user
 * @function
 * @param {string} data - User id
 * @returns {User} Returns delete user
 */
const deleteUser = (data) => usersRepo.deleteUser(data);
module.exports = { getAll, createUser, getUser, setUser, deleteUser };
