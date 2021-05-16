const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const {userId} = req.params
  const user = await usersService.getUser(userId);
  res.json(User.toResponse(user))
});

router.route('/').post(async (req, res) => {
  const data = req.body;
  const user = await usersService.createUser(data);
  res.json(User.toResponse(user))
});

router.route('/:userId').put(async (req, res) => {
  const data = req.body;
  const {userId} = req.params
  const user = await usersService.setUser(userId, data);
  res.json(User.toResponse(user))
});

router.route('/:userId').delete(async (req, res) => {
  const {userId} = req.params
  const user = await usersService.deleteUser(userId);
  res.json(User.toResponse(user))
});

module.exports = router;
