"use strict";
const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service.ts');
router.route('/').get(async (req, res) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAll(boardId);
    res.json(tasks);
});
router.route('/:taskId').get(async (req, res) => {
    const { boardId } = req.params;
    const { taskId } = req.params;
    const task = await tasksService.getTask(boardId, taskId);
    if (task) {
        res.status(200).json(task);
    }
    else {
        res.sendStatus(404);
    }
});
router.route('/').post(async (req, res) => {
    const { boardId } = req.params;
    const { body } = req;
    const task = await tasksService.createTask(boardId, body);
    res.status(201).json(task);
});
router.route('/:taskId').put(async (req, res) => {
    const { boardId } = req.params;
    const { taskId } = req.params;
    const { body } = req;
    const task = await tasksService.setTask(boardId, taskId, body);
    if (task) {
        res.status(200).json(task);
    }
    else {
        res.sendStatus(404);
    }
});
router.route('/:taskId').delete(async (req, res) => {
    const { boardId } = req.params;
    const { taskId } = req.params;
    const task = await tasksService.deleteTask(boardId, taskId);
    if (task) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});
module.exports = router;
