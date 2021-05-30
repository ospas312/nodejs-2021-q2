const { deleteBoardTask } = require('../tasks/task.memory.repository');
const Board = require('./board.model');

/**
 * Board repository module
 * @module Board repository
 */

const BOARDS = [];

/**
 * Function that get all board
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Board>} - Returns all boards
 */
const getAll = async () => BOARDS;

/**
 * Function create board
 * @async
 * @function
 * @param {Board} body - data board
 * @returns {Board} - Returns create board
 */
const createBoard = async (body) => {
    const board = new Board({
        title: body.title,
        columns: body.columns
    });
    BOARDS.push(board)
    return board
};

/**
 * Function get board by id
 * @async
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the searched board
 */
const getBoard = async (id) => BOARDS.find(i => i.id === id);

/**
 * Function edit board by id
 * @async
 * @function
 * @param {string|number} id - board id
 * @param {Board} body - data board
 * @returns {Board} Returns the edited board
 */
const setBoard = async (id, body) => {
    const index = BOARDS.findIndex(i => i.id===id)
    BOARDS[index].title = body.title
    BOARDS[index].columns = body.columns
    return  BOARDS[index]
};

/**
 * Function delete board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the delete board
 */
const deleteBoard = async (id) => {
    const index = BOARDS.findIndex(i => i.id === id)
    const board = BOARDS[index]
    deleteBoardTask(id)
    BOARDS.splice(index,1)
    return board
};


module.exports = { getAll, createBoard, getBoard, setBoard, deleteBoard };