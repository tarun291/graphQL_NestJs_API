/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { PhotoResolver } from './photo.resolver';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Photo]), forwardRef(() => UserModule)],
  providers: [PhotoResolver, PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
