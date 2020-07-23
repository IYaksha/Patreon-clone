import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  private saltRounds: number = 10;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async findAll (): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne (email: string): Promise<Partial<User>> {
    return this.userRepository.findOne({ where: { email }});
  }
  async create (userCredentials: UserDTO): Promise<User> {
    userCredentials.password = await bcrypt.hash(userCredentials.password, this.saltRounds);
    return this.userRepository.save(userCredentials);
  }
  async remove (userId: string): Promise<any> {
    return this.userRepository.delete(userId);
  }
}
