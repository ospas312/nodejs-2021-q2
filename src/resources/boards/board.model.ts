import { v4 as uuidv4 } from 'uuid';
import { IBoard } from '../../types/IBoard';

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

export class Board {
  constructor({
    id = uuidv4(),
    title = 'board',
    columns = [],
  }: IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
