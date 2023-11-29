/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), forwardRef(() => UserModule)],
  providers: [ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule {}
