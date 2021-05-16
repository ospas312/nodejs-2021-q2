const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.getBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});
router.route('/').post(async (req, res) => {
  const data = req.body;
  const boards = await boardsService.createBoard(data);
  res.status(201).json(boards)
});
router.route('/:boardId').put(async (req, res) => {
  const {boardId} = req.params
  const data = req.body;
  const boards = await boardsService.setBoard(boardId, data);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});
router.route('/:boardId').delete(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.deleteBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});

module.exports = router;