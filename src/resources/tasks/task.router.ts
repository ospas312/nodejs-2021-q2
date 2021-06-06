import { Router, Request, Response, NextFunction } from "express";
import tasksService from './task.service';
import { AppError } from "../../middleware/handleErrors";
import { ITask } from "../../types/ITask";

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/').get(async (req:Request, res:Response) => {
  const boardId:string = req.params['boardId']!;
  const tasks:ITask[] = await tasksService.getAll(boardId!);
  res.json(tasks);
});
taskRouter.route('/:taskId').get(async (req:Request, res:Response, next:NextFunction) => {
  const boardId:string = req.params['boardId']!;
  const taskId:string = req.params['taskId']!;
  const task:ITask|undefined = await tasksService.getTask(boardId!, taskId!);
  if (task) {
    res.status(200).json(task);
  } else {
    next(new AppError('Not found task by id',404));
  }
});
taskRouter.route('/').post(async (req:Request, res:Response) => {
  const boardId:string = req.params['boardId']!;
  const {body} = req;
  const task:ITask|undefined = await tasksService.createTask(boardId!, body);
  res.status(201).json(task);
});
taskRouter.route('/:taskId').put(async (req:Request, res:Response, next: NextFunction) => {
  const boardId:string = req.params['boardId']!;
  const taskId:string = req.params['taskId']!;
  const {body} = req;
  const task:ITask|undefined = await tasksService.setTask(boardId!, taskId!, body);
  if (task) {
    res.status(200).json(task);
  } else {
    next(new AppError('Not found task by id',404));
  }
});
taskRouter.route('/:taskId').delete(async (req:Request, res:Response, next:NextFunction) => {
  const boardId:string = req.params['boardId']!;
  const taskId:string = req.params['taskId']!;
  const task:ITask|undefined = await tasksService.deleteTask(boardId!, taskId!);
  if (task) {
    res.sendStatus(200);
  } else {
    next(new AppError('Not found task by id',404));
  }
});

export default taskRouter;
