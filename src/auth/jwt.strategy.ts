import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor () {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SECRET'
    });
  }
  async validate(payload) {
    return { id: payload.id, email: payload.email };
  }
}