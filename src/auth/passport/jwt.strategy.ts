import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
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

  async validate(payload: { id: string; login: string }) {
    return {
      login: payload.login,
      id: payload.id,
    };
  }
}
