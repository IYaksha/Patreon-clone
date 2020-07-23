import { Controller, Post, UseGuards, Request, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGaurd } from './local-auth.gaurd';
import { JwtAuthGaurd } from './jwt-auth.gaurd';
import { UserDTO, UserResponseDTO } from 'src/users/user.dto';

@Controller('auth')
export class AuthController {

  constructor (private authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login (@Request() req: any) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signup (@Body() userCredentials: UserDTO): Promise<UserResponseDTO> {
    try {
      const data = await this.authService.signup(userCredentials);
      return { 
        id: data.id,
        email: data.email,
        error: false,
        message: 'User created successfully'
      };
    } catch (error) {
      throw new HttpException('User already existed', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGaurd)
  @Get('test')
  async test(@Request() req) {
    console.log(req.body, req.params, req.ip, req.user);
    return { test: 'world' };
  }

}
