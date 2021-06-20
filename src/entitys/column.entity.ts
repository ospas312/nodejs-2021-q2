import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'boards' })
export class Columns {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column('varchar')
  title: string = 'Column';

  @Column('integer')
  order: number = 0;

  static toResponse(column: Omit<Columns, 'id'>) {
    return column;
  }
}
