import { Columns } from '../../entities/column.entity';

export class CreateBoardDto {
  id!: string;

  title!: string;

  columns!: Columns[];
}
