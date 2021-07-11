import { JwtService } from '@nestjs/jwt';
import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { Payload } from './Payload.interface';
import { Utils } from './utils';
import { CryptoService } from './crypto.service';
import { User } from '../entities/user.entity';
// import { IUser, IUserDto } from '../users/user.interface';
import { IUser } from '../users/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
  ) {}

  /* private getTokenPayload(user: IUser | IUserDto): Payload {
    return new Payload(user.id, user.login, user.name);
  }*

  /* async validateUser(payload: Payload): Promise<User> {
    return await this.userService.getByLogin(payload.login);
  } */

  // used in local auth strategy
  public async logintest(login: string, password: string): Promise<IUser> {
    Logger.debug('login');
    return this.userService
      .getByLoginTest(login)
      .then((user) => {
        Logger.debug(user);
        if (user && user.id) {
          return this.cryptoService.checkPassword(
            user.password,
            user.salt,
            password,
          )
            ? Promise.resolve(user)
            : Promise.reject(Utils.UnAuthorizedException);
        }
        return Promise.reject(Utils.UnAuthorizedException);
      })
      .catch((err) => Promise.reject(err));
  }

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
