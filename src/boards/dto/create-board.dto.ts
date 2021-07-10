import { Columns } from 'src/entities/column.entity';

export class CreateBoardDto {
  id: string;
  title: string;
  columns: Columns[];
}
