import { Router } from "express";
import { AppError } from "../../middleware/handleErrors";
import { User } from './user.model';
import usersService from "./user.service";

const userRouter = Router({ mergeParams: true });

userRouter.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

userRouter.route('/:userId').get(async (req, res, next) => {
  const {userId} = req.params
  const user = await usersService.getUser(userId);
  if (user){
    res.status(200).json(User.toResponse(user))
  }else {
    next(new AppError('Not found user by id',404))
  }
});

userRouter.route('/').post(async (req, res) => {
  const data = req.body;
  const user = await usersService.createUser(data);
  res.status(201).json(User.toResponse(user))
});

userRouter.route('/:userId').put(async (req, res, next) => {
  const data = req.body;
  const {userId} = req.params
  const user = await usersService.setUser(userId, data);
  if (user){
    res.status(200).json(User.toResponse(user))
  }else {
    next(new AppError('Not found user by id',404))
  }
});

userRouter.route('/:userId').delete(async (req, res, next) => {
  const {userId} = req.params
  const user = await usersService.deleteUser(userId);
  if (user){
    res.status(200).json(User.toResponse(user))
  }else {
    next(new AppError('Not found user by id',404))
  }
});

export default userRouter;
