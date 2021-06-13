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
const boardsRepo = __importStar(require("./board.memory.repository"));
/**
 * Board service module
 * @module Board service
 */
/**
 * Function that get all board
 * @function
 * @returns {Array<Board>} - Returns all boards
 */
const getAll = () => boardsRepo.getAll();
/**
 * Function create board
 * @function
 * @param {Board} body - data board
 * @returns {Board} - Returns create board
 */
const createBoard = (body) => boardsRepo.createBoard(body);
/**
 * Function get board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the searched board
 */
const getBoard = (id) => boardsRepo.getBoard(id);
/**
 * Function edit board by id
 * @function
 * @param {string|number} id - board id
 * @param {Board} data - data board
 * @returns {Board} Returns the edited board
 */
const setBoard = (id, data) => boardsRepo.setBoard(id, data);
/**
 * Function delete board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the delete board
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);
module.exports = { getAll, createBoard, getBoard, setBoard, deleteBoard };
