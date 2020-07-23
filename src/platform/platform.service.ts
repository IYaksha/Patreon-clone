import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PlatformDTO } from './platform.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from './platform.entity';

@Injectable()
export class PlatformService {
  constructor (
    private userService: UsersService,
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>
  ) {}
  async createPlatform (userId: string, platformDetails: PlatformDTO): Promise<any> {
    const currentUser = await this.userService.findById(userId);
    const newPlatform = this.platformRepository.create({
      ...platformDetails,
      user: currentUser
    });
    await this.platformRepository.save(newPlatform);
    return newPlatform;
  }
  async getPlatform (platformId: string): Promise<any> {
    return this.platformRepository.findOne({ where: { id: platformId }, relations: ["user"] });
  }
}
