import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Utils } from '../utils';
import { IUser } from '../../users/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: false,
    });
  }

  async validate(login: string, password: string): Promise<IUser> {
    Logger.debug(`Login ${login}`);
    const user = await this.authService.logintest(login, password);
    if (!user) {
      throw Utils.UnAuthorizedException;
    }
    return user;
  }
}
