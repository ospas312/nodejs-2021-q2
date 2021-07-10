import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, Connection } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from '../entities/board.entity';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private userRepository: Repository<Board>,
    private connection: Connection,
  ) {}
  async create(body: CreateBoardDto): Promise<Board> {
    const board = await this.userRepository.create(body);
    await this.userRepository.save(board);
    return board;
  }

  async findAll(): Promise<Board[]> {
    const boards = await this.userRepository.find({});
    return boards;
  }

  async findOne(id: string): Promise<Board | null> {
    const board = await this.userRepository.findOne(id);
    if (!board) return null;
    return board;
  }

  async update(id: string, body: UpdateBoardDto): Promise<Board | null> {
    const board = await this.userRepository.findOne(id);
    if (!board) return null;
    const updateBoard = await this.userRepository.update(id, body);
    return updateBoard.raw;
  }

  async remove(id: string): Promise<DeleteResult | null> {
    const board = await this.userRepository.findOne(id);
    if (!board) return null;
    await this.connection
      .getRepository(Task)
      .createQueryBuilder('task')
      .delete()
      .from(Task)
      .where('boardId = :boardId', { boardId: id })
      .execute();

    return await this.userRepository.delete(id);
  }
}
