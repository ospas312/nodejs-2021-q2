import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryColumn, Column } from 'typeorm';

/**
* Task model
* @typedef {Object} Task
* @property {string} id - Task id
* @property {string} title - Task title
* @property {number} order - Task order
* @property {string} description - Task description
* @property {string} taskId - Task id
* @property {string} boardId - Board id
* @property {string} columnId - Column id
*/
@Entity({ name: 'tasks' })
export class Task {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column('varchar')
  title = 'Task';

  @Column('integer')
  order = 0;

  @Column('text')
  description = '';

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
