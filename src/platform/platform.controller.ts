import { Controller, Get, Post, UseGuards, Request, Query, Param } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { JwtAuthGaurd } from 'src/auth/jwt-auth.gaurd';

@Controller('platform')
export class PlatformController {
  constructor (private platformService: PlatformService) {}
  
  @UseGuards(JwtAuthGaurd)
  @Post()
  async createPlatform (@Request() request: any) {
    const { user, body } = request;
    return this.platformService.createPlatform(user.id, body);
  }

  @UseGuards(JwtAuthGaurd)
  @Get(':platformId')
  async getPlatform (@Param('platformId') platformId: string) {
    return this.platformService.getPlatform(platformId);
  }

}
