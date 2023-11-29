/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { ProfileInput } from './profile.entity';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  async createProfile(data: ProfileInput) {
    const profile = this.profileRepository.create(data);
    return await this.profileRepository.save(profile);
  }
  async findById(id: number) {
    const profile = await this.profileRepository.findOne({
      where: { id: id },
    });
    return profile;
  }
}
