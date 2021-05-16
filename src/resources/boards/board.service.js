const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const createBoard = (body) => boardsRepo.createBoard(body);
const getBoard = (id) => boardsRepo.getBoard(id);
const setBoard = (id, data) => boardsRepo.setBoard(id , data);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);


module.exports = { getAll, createBoard, getBoard, setBoard, deleteBoard };