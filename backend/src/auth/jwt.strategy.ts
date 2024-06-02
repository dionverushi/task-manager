import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../common/constants/constants';
import { User } from 'src/modules/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret || 'testkey',
    });
  }

  async validate(payload: any) {
    const user = await User.findOne({
      where: {
        id: payload.sub,
      },
      //   rtHash: Not(IsNull()),
    });

    if (!user) {
      return new UnauthorizedException();
    }

    return { ...user, clientId: payload.clientId };
  }
}
