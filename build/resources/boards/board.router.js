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
const boardsService = __importStar(require("./board.service"));
const boardRouter = express_1.Router();
boardRouter.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
});
boardRouter.route('/:boardId').get(async (req, res) => {
    const { boardId } = req.params;
    const boards = await boardsService.getBoard(boardId);
    if (boards) {
        res.status(200).json(boards);
    }
    else {
        res.sendStatus(404);
    }
});
boardRouter.route('/').post(async (req, res) => {
    const data = req.body;
    const boards = await boardsService.createBoard(data);
    res.status(201).json(boards);
});
boardRouter.route('/:boardId').put(async (req, res) => {
    const { boardId } = req.params;
    const data = req.body;
    const boards = await boardsService.setBoard(boardId, data);
    if (boards) {
        res.status(200).json(boards);
    }
    else {
        res.sendStatus(404);
    }
});
boardRouter.route('/:boardId').delete(async (req, res) => {
    const { boardId } = req.params;
    const boards = await boardsService.deleteBoard(boardId);
    if (boards) {
        res.status(200).json(boards);
    }
    else {
        res.sendStatus(404);
    }
});
exports.default = boardRouter;
