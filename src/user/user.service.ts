/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { TeamService } from '../team/team.service';
import { PhotoService } from 'src/photo/photo.service';
import { User, UserInput } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
    @Inject(forwardRef(() => PhotoService))
    private readonly photoService: PhotoService,
  ) {}

  findAll() {
    return this.userRepository.find({
      relations: ['teams'],
    });
  }

  async findById(id: number) {
    const userDetails = await this.userRepository.findOne({
      where: { id: id },
      relations: ['teams', 'photos'],
    });

    console.log('...stop');
    return userDetails;
  }

  async addPhoto(userId: number, photoId: number) {
    const user = await this.findById(userId);
    if (!user) return null;
    const photo = await this.photoService.findById(photoId);
    if (photo) {
      (await user.photos).push(photo);
      await this.userRepository.save(user);
    }
    console.log('...debug')
    return user;
  }
  async createUser(data: UserInput) {
    const user = await this.userRepository.save(
      this.userRepository.create(data),
    );
    if (data.teamId) {
      await this.teamService.addMember(data.teamId, user.id);
    }
    if (data.photoId) {
      await this.addPhoto(user.id, data.photoId);
    }
    return user;
  }

  findByIds(ids: number[]) {
    return this.userRepository.find({
      where: { id: In(ids) },
      relations: ['teams'],
    });
  }
}
