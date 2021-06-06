import { Router, Request, Response, NextFunction } from "express";
import boardsService from './board.service';
import { AppError } from "../../middleware/handleErrors";
import { IBoard } from "../../types/IBoard";

const boardRouter = Router({ mergeParams: true });

boardRouter.route('/').get(async (_req:Request, res:Response) => {
  const boards:IBoard[] = await boardsService.getAll();
  res.json(boards);
});

boardRouter.route('/:boardId').get(async (req:Request, res:Response, next:NextFunction) => {
  const boardId:string = req.params['id']!;
  const boards:IBoard|undefined = await boardsService.getBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    next(new AppError('Not found board by id',404))
  }
});
boardRouter.route('/').post(async (req, res) => {
  const data:IBoard = req.body;
  const boards:IBoard|undefined = await boardsService.createBoard(data);
  res.status(201).json(boards)
});
boardRouter.route('/:boardId').put(async (req:Request, res:Response, next:NextFunction) => {
  const boardId:string = req.params['id']!;
  const data:IBoard = req.body;
  const boards:IBoard|undefined = await boardsService.setBoard(boardId, data);
  if (boards){
    res.status(200).json(boards)
  } else {
    next(new AppError('Not found board by id',404))
  }
});
boardRouter.route('/:boardId').delete(async (req:Request, res:Response, next:NextFunction) => {
  const boardId:string = req.params['id']!;
  const boards:IBoard|undefined = await boardsService.deleteBoard(boardId);
  if (boards){
    res.status(200).json(boards)
  } else {
    next(new AppError('Not found board by id',404))
  }
});

export default boardRouter;