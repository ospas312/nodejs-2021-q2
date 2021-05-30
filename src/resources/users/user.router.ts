import { Router } from "express";
import { User } from './user.model';
import * as usersService from './user.service';

const userRouter = Router();

userRouter.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

userRouter.route('/:userId').get(async (req, res) => {
  const {userId} = req.params
  const user = await usersService.getUser(userId);
  if (user){
    res.status(200).json(User.toResponse(user))
  }else {
    res.sendStatus(404)
  }
});

userRouter.route('/').post(async (req, res) => {
  const data = req.body;
  const user = await usersService.createUser(data);
  res.status(201).json(User.toResponse(user))
});

userRouter.route('/:userId').put(async (req, res) => {
  const data = req.body;
  const {userId} = req.params
  const user = await usersService.setUser(userId, data);
  if (user){
    res.status(200).json(User.toResponse(user))
  }else {
    res.sendStatus(404)
  }
});

userRouter.route('/:userId').delete(async (req, res) => {
  const {userId} = req.params
  const user = await usersService.deleteUser(userId);
  res.status(200).json(User.toResponse(user))
});

export default userRouter;
