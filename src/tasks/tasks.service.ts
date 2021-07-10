import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async create(boardId: string, body: CreateTaskDto): Promise<Task> {
    const task = await this.taskRepository.create({ ...body, boardId });
    await this.taskRepository.save(task);
    return task;
  }

  async findAll(boardId: string): Promise<Task[]> {
    const tasks = await this.taskRepository.find({ where: { boardId } });
    return tasks;
  }

  async findOne(id: string, boardId: string): Promise<Task | null> {
    const task = await this.taskRepository.findOne(id, { where: { boardId } });
    if (!task) return null;
    return task;
  }

  async update(
    id: string,
    boardId: string,
    body: UpdateTaskDto,
  ): Promise<Task | null> {
    const task = await this.taskRepository.findOne(id, { where: { boardId } });
    if (!task) return null;
    const updateTask = await this.taskRepository.save({ ...task, ...body });
    return updateTask;
  }

  async remove(id: string, boardId: string): Promise<DeleteResult> {
    const task = await this.taskRepository.findOne({ boardId, id });
    if (!task) return null;
    return await this.taskRepository.delete({ boardId, id });
  }
}
