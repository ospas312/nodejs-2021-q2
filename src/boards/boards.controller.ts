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
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateBoardDto) {
    return this.boardsService.create(body);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    const boards = await this.boardsService.findAll();
    if (!boards) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return boards;
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    const board = await this.boardsService.findOne(id);
    if (!board) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return board;
  }

  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() body: UpdateBoardDto) {
    const board = await this.boardsService.update(id, body);
    if (!board) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return board;
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    const board = await this.boardsService.remove(id);
    if (!board) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return board;
  }
}
