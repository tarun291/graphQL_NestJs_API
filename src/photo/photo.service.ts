/* eslint-disable prettier/prettier */
import { Photo } from './photo.entity';
import { forwardRef, Inject } from '@nestjs/common';
import { PhotoInput } from './photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  async createPhoto(data: PhotoInput) {
    let photo = this.photoRepository.create(data);
    photo = await this.photoRepository.save(photo);
    return photo;
  }

  async findById(id: number) {
    const photo = await this.photoRepository.findOne({
      where: { id: id },
    });
    return photo;
  }
}
