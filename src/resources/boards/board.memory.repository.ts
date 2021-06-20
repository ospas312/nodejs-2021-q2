import { getRepository } from "typeorm";
import { Board } from "../../entitys/board.entity";
import { Task } from "../../entitys/task.entity";

/**
 * Function that get all board
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Array<Board>} - Returns all boards
 */
const getAll = async (): Promise<Board[]> => {
    const boardRepository = getRepository(Board);
    return  boardRepository.find({where:{}});
};

/**
 * Function create board
 * @async
 * @function
 * @param {Board} data - data board
 * @returns {Board} - Returns create board
 */
const createBoard = async (data:Board): Promise<Board> => {
    const boardRepository = getRepository(Board);
    const board = await boardRepository.create(data);
    return boardRepository.save(board);
};

/**
 * Function get board by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @returns {Board} Returns the searched board
 */
const getBoard = async (boardId:string): Promise<Board| null> => {
    const boardRepository = getRepository(Board);
    const board = await boardRepository.findOne(boardId);
    if (!board) return null;
    return board;
};

/**
 * Function edit board by id
 * @async
 * @function
 * @param {string|number} boardId - board id
 * @param {Board} data - data board
 * @returns {Board} Returns the edited board
 */
const setBoard = async (boardId:string, data:Board): Promise<Board | null> => {
    const boardRepository = getRepository(Board);
    const board = await boardRepository.findOne(boardId);
    if (!board) return null;
    const updateBoard = await boardRepository.update(boardId, data);
    return updateBoard.raw;
};

/**
 * Function delete board by id
 * @function
 * @param {string|number} id - board id
 * @returns {Board} Returns the delete board
 */
const deleteBoard = async (id:string): Promise<Board | null> => {
    const boardRepository = getRepository(Board);
    const board = await boardRepository.findOne(id);
    if (!board) return null;
    await boardRepository.delete(id);
 
    const taskRepository = getRepository(Task);
    await taskRepository.update({ boardId: id }, { boardId: null });

    return board
};


export default { getAll, createBoard, getBoard, setBoard, deleteBoard };