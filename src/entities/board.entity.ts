import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Columns } from './column.entity';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { default: 'Board' })
  title!: string;

  @Column('jsonb')
  columns: Columns[] = [];

  static toResponse(board: Omit<Board, 'id'>) {
    return board;
  }
}
