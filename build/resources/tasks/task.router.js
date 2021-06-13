"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksService = __importStar(require("./task.service"));
const taskRouter = express_1.Router();
taskRouter.route('/').get(async (req, res) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAll(boardId);
    res.json(tasks);
});
taskRouter.route('/:taskId').get(async (req, res) => {
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
taskRouter.route('/').post(async (req, res) => {
    const { boardId } = req.params;
    const { body } = req;
    const task = await tasksService.createTask(boardId, body);
    res.status(201).json(task);
});
taskRouter.route('/:taskId').put(async (req, res) => {
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
taskRouter.route('/:taskId').delete(async (req, res) => {
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
exports.default = taskRouter;
