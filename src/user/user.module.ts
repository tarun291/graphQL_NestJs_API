/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TeamModule } from '../team/team.module';
import { PhotoModule } from 'src/photo/photo.module';
import { ProfileModule } from 'src/profile/profile.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => TeamModule),
    forwardRef(() => PhotoModule),
    forwardRef(() => ProfileModule),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
