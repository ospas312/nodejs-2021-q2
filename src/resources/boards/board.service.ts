import boardsRepo from './board.memory.repository';
import { Board } from './board.entity'; 

/**
 * Board service module
 * @module Board service
 */

/**
 * Function that get all board
 * @function
 * @returns {Array<Board>} - Returns all boards
 */
const getAll = async(): Promise<Board[]> => boardsRepo.getAll();

/**
 * Function create board
 * @function
 * @param {Board} body - data board
 * @returns {Board} - Returns create board
 */
const createBoard = async(body:Board): Promise<Board> => boardsRepo.createBoard(body);

/**
 * Function get board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the searched board
 */
const getBoard = async(id:string): Promise<Board | null> => boardsRepo.getBoard(id);

/**
 * Function edit board by id
 * @function
 * @param {string|number} id - board id
 * @param {Board} data - data board
 * @returns {Board} Returns the edited board
 */
const setBoard = async(id:string, data:Board): Promise<Board | null> => boardsRepo.setBoard(id , data);

/**
 * Function delete board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the delete board
 */
const deleteBoard = async(id:string): Promise<Board | null> => boardsRepo.deleteBoard(id);


export default { getAll, createBoard, getBoard, setBoard, deleteBoard };