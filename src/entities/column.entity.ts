import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'columns' })
export class Columns {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { default: 'Column' })
  title: string;

  @Column('integer')
  order: number;

  static toResponse(column: Omit<Columns, 'id'>) {
    return column;
  }
}
