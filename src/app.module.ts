import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {typeOrmConfig} from 'config/typeorm.config';
import { User } from './users/user.entity';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserProfile } from './user-profile/user-profile.entity';
import { PlatformModule } from './platform/platform.module';
import { Platform } from './platform/platform.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'root',
      database: 'patreon',
      entities: [User, UserProfile, Platform],
      synchronize: true,
    }),
    AuthModule, 
    UsersModule, UserProfileModule, PlatformModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
