import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { default: 'Task' })
  title!: string;

  @Column('integer')
  order!: number;

  @Column('text', { default: '' })
  description!: string;

  @Column('varchar', { length: 36, nullable: true })
  userId!: string | null;

  @Column('varchar', { length: 36, nullable: true })
  boardId!: string | null;

  @Column('varchar', { length: 36, nullable: true })
  columnId!: string | null;

  static toResponse(task: Omit<Task, 'id'>) {
    return task;
  }
}
