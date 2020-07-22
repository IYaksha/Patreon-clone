import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'vomaksh',
        password: 'vomaksh'
      }
    ]
  }
  findUser (username: string) {
    return this.users.find(user => user.username === username);
  }
}
