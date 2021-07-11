import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { Token } from './auth.token';
import { UsersService } from '../users/users.service';

@ApiTags('auth')
@Controller('login')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @HttpCode(200)
  async login(@Body() login: User): Promise<Token> {
    const token = await this.authService.login(login);
    if (!token) {
      throw new HttpException('Not authorized!', HttpStatus.UNAUTHORIZED);
    }
    return token;
  }

  @Post('addUser')
  @HttpCode(200)
  async addUser(@Body() body: User): Promise<User> {
    console.log(body);
    const user = await this.usersService.createUser(body);
    return user;
  }
}
