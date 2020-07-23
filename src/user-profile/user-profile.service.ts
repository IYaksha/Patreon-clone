import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './user-profile.entity';
import { Repository } from 'typeorm';
import { UserProfileDTO } from './user-profile.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async createUserProfile (userId: string, userProfileDTO: UserProfileDTO): Promise<UserProfile> {
    const userProfileObj = await this.userProfileRepository.save(userProfileDTO);
    await this.userRepository.update({ id: userId }, { profileId: userProfileObj.profileId });
    return userProfileObj;
	}
}
