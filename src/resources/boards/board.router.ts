import { Router } from "express";
import * as boardsService from './board.service';


const boardRouter = Router();

boardRouter.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

boardRouter.route('/:boardId').get(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.getBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});
boardRouter.route('/').post(async (req, res) => {
  const data = req.body;
  const boards = await boardsService.createBoard(data);
  res.status(201).json(boards)
});
boardRouter.route('/:boardId').put(async (req, res) => {
  const {boardId} = req.params
  const data = req.body;
  const boards = await boardsService.setBoard(boardId, data);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});
boardRouter.route('/:boardId').delete(async (req, res) => {
  const {boardId} = req.params
  const boards = await boardsService.deleteBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    res.sendStatus(404)
  }
});

export default boardRouter;