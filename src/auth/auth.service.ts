import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../entities/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(body: User) {
    const { login } = body;

    const user = await this.userService.getByLogin(login);
    if (user) {
      const payload = {
        id: user?.id,
        login: user?.login,
      };

      return {
        token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
