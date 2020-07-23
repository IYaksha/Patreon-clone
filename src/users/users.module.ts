import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersController } from './users.controller';
import { LocalAuthGaurd } from 'src/auth/local-auth.gaurd';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { UserDTO, UserResponseDTO } from './user.dto';
import { User } from './user.entity';

@Module({
  imports: [LocalAuthGaurd, TypeOrmModule.forFeature([User]), UserDTO, UserResponseDTO],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, UserDTO, UserResponseDTO],
})
export class UsersModule {}
