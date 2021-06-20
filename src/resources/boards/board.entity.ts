import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Columns } from '../columns/column.entity'; 

/**
* Board model
* @typedef {Object} Board
* @property {string|number} id - Board id
* @property {string} title - Board title
* @property {Array<IColumn>} columns - Board columns
*/

/**
* Column model
* @typedef {Object} Columns
* @property {string|number} id - Column id
* @property {string} title - Column title
* @property {number} order - Column order (optional)
*/
@Entity({ name: 'boards' })
export class Board {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column('varchar')
  title = 'Board';

  @Column('jsonb')
  columns: Columns[] = [];

  static toResponse(board: Omit<Board, 'id'>) {
    return board;
  }
}
