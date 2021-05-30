const { v4: uuidv4 } = require('uuid');


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
  constructor({
    id = uuidv4(),
    title = 'board',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;