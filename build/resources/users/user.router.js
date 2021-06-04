"use strict";
const router = require('express').Router();
const User = require('./user.model.ts');
const usersService = require('./user.service.ts');
router.route('/').get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
});
router.route('/:userId').get(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.getUser(userId);
    if (user) {
        res.status(200).json(User.toResponse(user));
    }
    else {
        res.sendStatus(404);
    }
});
router.route('/').post(async (req, res) => {
    const data = req.body;
    const user = await usersService.createUser(data);
    res.status(201).json(User.toResponse(user));
});
router.route('/:userId').put(async (req, res) => {
    const data = req.body;
    const { userId } = req.params;
    const user = await usersService.setUser(userId, data);
    if (user) {
        res.status(200).json(User.toResponse(user));
    }
    else {
        res.sendStatus(404);
    }
});
router.route('/:userId').delete(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.deleteUser(userId);
    res.status(200).json(User.toResponse(user));
});
module.exports = router;
