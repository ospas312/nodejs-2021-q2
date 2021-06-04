"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
/**
* Board model
* @typedef {Object} Board
* @property {string|number} id - Board id
* @property {string} title - Board title
* @property {Column[]} columns - Board columns
*/
/**
* Column model
* @typedef {Object} Column
* @property {string|number} id - Column id
* @property {string} title - Column title
* @property {number} order - Column order (optional)
*/
class Board {
    constructor({ id = uuid_1.v4(), title = 'board', columns = [], }) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}
exports.Board = Board;
