import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('boards/:boardId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  async create(@Param('boardId') boardId: string, @Body() body: CreateTaskDto) {
    const task = await this.tasksService.create(boardId, body);
    if (!task) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  @Get()
  @HttpCode(200)
  async findAll(@Param('boardId') boardId: string) {
    return await this.tasksService.findAll(boardId);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string, @Param('boardId') boardId: string) {
    const task = await this.tasksService.findOne(id, boardId);
    if (!task) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Param('boardId') boardId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return await this.tasksService.update(id, boardId, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string, @Param('boardId') boardId: string) {
    const delTask = await this.tasksService.remove(id, boardId);
    if (!delTask) {
      throw new HttpException('No Content!', HttpStatus.NO_CONTENT);
    }
    return delTask;
  }
}
