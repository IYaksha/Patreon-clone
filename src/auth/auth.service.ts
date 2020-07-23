import { Injectable, Inject, forwardRef, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserDTO } from 'src/users/user.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor (
    private userService: UsersService, 
    private jwtService: JwtService
  ) {}

  async validateUser (username: string, password: string) {
    const foundUser = await this.userService.findOne(username);
    if (!foundUser) {
      throw new HttpException('Wrong email or password', HttpStatus.FORBIDDEN);
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);
      if (isPasswordCorrect) {
        return {
          id: foundUser.id,
          email: foundUser.email,
        }
      } else {
        throw new HttpException('Wrong email or password', HttpStatus.FORBIDDEN);
      }
    }
  }

  async login (user: any) {
    const payload = { email: user.email, id: user.id };
    const currentUserDetails = await this.userService.findOne(user.email);
    return {
      email: user.email,
      id: user.id,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signup (userCredentials: UserDTO): Promise<User> {
    const foundUser = await this.userService.findOne(userCredentials.email);
    if (!foundUser) {
      return this.userService.create(userCredentials);
    } else {
      throw new HttpException('User already exists', 400);
    }
  }

  async getUser (user:any) {
    return this.userService.findOne(user.email);
  }

}
