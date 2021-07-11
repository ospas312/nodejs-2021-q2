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
  UseGuards,
  UseFilters
} from '@nestjs/common';
import {  MyExceptionFilter } from '../exception/exception.filter'
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
@UseFilters(new MyExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(createUserDto);
    return User.toResponse(user);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    const users: User[] = await this.usersService.getAll();
    return users.map(User.toResponse);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.getUser(id);
    if (!user) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return User.toResponse(user);
  }

  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.updateUser(id, updateUserDto);
    if (!user) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return User.toResponse(user);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: string) {
    const user = await this.usersService.deleteUser(id);
    if (!user) {
      throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
