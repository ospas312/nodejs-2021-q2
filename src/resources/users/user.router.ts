import { NextFunction, Request, Response, Router } from "express";
import { AppError } from "../../middleware/handleErrors";
import { IUser } from "../../types/IUser";
import { User } from './user.model';
import usersService from "./user.service";

const userRouter = Router({ mergeParams: true });

userRouter.route('/').get(async (_req:Request, res:Response) => {
  const users:IUser[] = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

userRouter.route('/:userId').get(async (req:Request, res:Response, next:NextFunction) => {
  const userId:string = req.params['userId']!;
  const user:IUser|undefined = await usersService.getUser(userId);
  if (user){
    res.status(200).json(User.toResponse(user));
  }else {
    next(new AppError('Not found user by id',404));
  }
});

userRouter.route('/').post(async (req:Request, res:Response) => {
  const data:IUser = req.body;
  const user:IUser = await usersService.createUser(data);
  res.status(201).json(User.toResponse(user));
});

userRouter.route('/:userId').put(async (req:Request, res:Response, next:NextFunction) => {
  const data:IUser = req.body;
  const userId:string = req.params['userId']!;
  const user:IUser|undefined = await usersService.setUser(userId, data);
  if (user){
    res.status(200).json(User.toResponse(user));
  }else {
    next(new AppError('Not found user by id',404));
  }
});

userRouter.route('/:userId').delete(async (req:Request, res:Response, next:NextFunction) => {
  const userId:string = req.params['userId']!;
  const user:IUser|undefined = await usersService.deleteUser(userId);
  if (user){
    res.status(200).json(User.toResponse(user));
  }else {
    next(new AppError('Not found user by id',404));
  }
});

export default userRouter;
