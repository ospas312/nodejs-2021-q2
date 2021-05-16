const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.getBoard(boardId);
  res.json(boards)
});
router.route('/').post(async (req, res) => {
  const data = req.body;
  const boards = await boardsService.createBoard(data);
  res.json(boards)
});
router.route('/:boardId').put(async (req, res) => {
  const {boardId} = req.params
  const data = req.body;
  const boards = await boardsService.setBoard(boardId, data);
  res.json(boards)
});
router.route('/:boardId').delete(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.deleteBoard(boardId);
  res.json(boards)
});

module.exports = router;