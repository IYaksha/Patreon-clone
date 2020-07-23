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
  async createUserProfile (
    userId: string, 
    userProfileDTO: UserProfileDTO
  ): Promise<any> {
    const newUserProfile = new UserProfile();
    const currentUser = await this.userRepository.findOne({ where: { id: userId }});
    newUserProfile.firstName = userProfileDTO.firstName;
    newUserProfile.middleName = userProfileDTO.middleName;
    newUserProfile.lastName = userProfileDTO.lastName;
    newUserProfile.user = currentUser;
    await this.userProfileRepository.save(newUserProfile);
    currentUser.profile = newUserProfile;
    await this.userRepository.save(currentUser);
    return {
      id: newUserProfile.id,
      ...userProfileDTO
    };
  }
  async getUserProfile (
    userId: string
  ): Promise<any> {
    return this.userProfileRepository.find({ where: { user: userId }, relations: ['user'] });
  }
}
