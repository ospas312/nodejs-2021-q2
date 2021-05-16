const Board = require('./board.model');

const BOARDS = [];

const getAll = async () => BOARDS;

const createBoard = async (body) => {
    const board = new Board({
        title: body.title,
        columns: body.columns
    });
    BOARDS.push(board)
    return board
};

const getBoard = async (id) => BOARDS.find(i => i.id === id);

const setBoard = async (id, data) => {
    const index = BOARDS.findIndex(i => i.id===id)
    BOARDS[index].title = data.title
    BOARDS[index].columns = data.columns
    return  BOARDS[index]
};

const deleteBoard = async (id) => {
    const index = BOARDS.findIndex(i => i.id === id)
    const board = BOARDS[index]
    BOARDS.splice(index,1)
    return board
};

module.exports = { getAll, createBoard, getBoard, setBoard, deleteBoard };