import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt-auth.gaurd';
import { UserProfileDTO } from './user-profile.dto';
import { UserProfileService } from './user-profile.service';

@Controller('userProfile')
export class UserProfileController {

  constructor (private userProfileService: UserProfileService) {}

  @UseGuards(JwtAuthGaurd)
  @Post('')
  async createUserProfile (@Request() request): Promise<any> {
    const { id } = request.user;
    const userDetails: UserProfileDTO = request.body;
    return this.userProfileService.createUserProfile(id, userDetails);
  }

  @UseGuards(JwtAuthGaurd)
  @Get('')
  async getUserProfile (@Request() request): Promise<any> {
    const { id } = request.user;
    return this.userProfileService.getUserProfile(id);
  }

}
