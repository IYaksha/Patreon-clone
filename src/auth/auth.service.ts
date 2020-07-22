import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor (
    private userService: UsersService, 
    private jwtService: JwtService
  ) {}

  async validateUser (username: string, password: string) {
    const foundUser = await this.userService.findUser(username);
    if (!foundUser) {
      return null;
    } else if (foundUser && foundUser.password === password) {
      const { password, ...user } = foundUser;
      return user;
    } else {
      return null;
    }
  }

  async login (user: any) {
    const payload = { username: user.username, userId: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

}
