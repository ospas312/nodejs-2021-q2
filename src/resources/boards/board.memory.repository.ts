import { Board } from "./board.model";
import deleteBoardTask from '../tasks/task.memory.repository';
import { IBoard } from "../../types/IBoard";

/**
 * Board repository module
 * @module Board repository
 */

const BOARDS:Array<IBoard> = [];

/**
 * Function that get all board
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Board>} - Returns all boards
 */
const getAll = async (): Promise<Array<IBoard>> => BOARDS;

/**
 * Function create board
 * @async
 * @function
 * @param {Board} body - data board
 * @returns {Board} - Returns create board
 */
const createBoard = async (body:IBoard): Promise<IBoard> => {
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
const getBoard = async (id:string): Promise<IBoard| undefined> => BOARDS.find(i => i.id === id);

/**
 * Function edit board by id
 * @async
 * @function
 * @param {string|number} id - board id
 * @param {Board} body - data board
 * @returns {Board} Returns the edited board
 */
const setBoard = async (id:string, body:IBoard): Promise<IBoard | undefined> => {
    const index = BOARDS.findIndex(i => i.id===id)
    BOARDS[index] = body
    return  BOARDS[index]
};

/**
 * Function delete board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the delete board
 */
const deleteBoard = async (id:string): Promise<IBoard | undefined> => {
    const index = BOARDS.findIndex(i => i.id === id)
    const board = BOARDS[index]
    await deleteBoardTask.deleteBoardTask(id)
    BOARDS.splice(index,1)
    return board
};


export default { getAll, createBoard, getBoard, setBoard, deleteBoard };