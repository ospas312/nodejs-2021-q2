"use strict";
const boardsRepo = require('./board.memory.repository.ts');
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
