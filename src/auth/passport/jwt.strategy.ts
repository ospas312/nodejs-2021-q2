import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable /* Logger */ } from '@nestjs/common';
// import { AuthService } from '../auth.service';
// import { Payload } from '../interfaces/payload';
// import { Utils } from '../utils';
// import config from '../../config';
// import User from '../../user/user.interface';
import { JWT_SECRET_KEY } from '../../common/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(/* private readonly authService: AuthService */) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: JWT_SECRET_KEY,
    });
  }

  /* async validate(payload: { id: string; login: string }): Promise<User> {
    Logger.debug('Validate User');
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw Utils.UnAuthorizedException;
    } */
  async validate(payload: { id: string; login: string }) {
    return {
      login: payload.login,
      id: payload.id,
    };
  }
}
