import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGaurd } from './local-auth.gaurd';
import { JwtAuthGaurd } from './jwt-auth.gaurd';

@Controller('auth')
export class AuthController {

  constructor (private authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login (@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGaurd)
  @Post('jwt')
  async jwtTest () {
    return {
      message: 'The thing worked!'
    }
  }

}
