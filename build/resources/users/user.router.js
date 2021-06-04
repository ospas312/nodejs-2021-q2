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
const user_model_1 = require("./user.model");
const usersService = __importStar(require("./user.service"));
const userRouter = express_1.Router();
userRouter.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(user_model_1.User.toResponse));
});
userRouter.route('/:userId').get(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.getUser(userId);
    if (user) {
        res.status(200).json(user_model_1.User.toResponse(user));
    }
    else {
        res.sendStatus(404);
    }
});
userRouter.route('/').post(async (req, res) => {
    const data = req.body;
    const user = await usersService.createUser(data);
    res.status(201).json(user_model_1.User.toResponse(user));
});
userRouter.route('/:userId').put(async (req, res) => {
    const data = req.body;
    const { userId } = req.params;
    const user = await usersService.setUser(userId, data);
    if (user) {
        res.status(200).json(user_model_1.User.toResponse(user));
    }
    else {
        res.sendStatus(404);
    }
});
userRouter.route('/:userId').delete(async (req, res) => {
    const { userId } = req.params;
    const user = await usersService.deleteUser(userId);
    res.status(200).json(user_model_1.User.toResponse(user));
});
exports.default = userRouter;
