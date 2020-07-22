import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersController } from './users.controller';
import { LocalAuthGaurd } from 'src/auth/local-auth.gaurd';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [LocalAuthGaurd],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
