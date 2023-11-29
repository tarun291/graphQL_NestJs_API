/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../student/student.entity';
import { Team } from '../team/team.entity';
import { User } from '../user/user.entity';
import {Photo} from '../photo/photo.entity';
import { Problem } from 'src/problem/problem.entity';
import { Topic } from 'src/topic/topic.etity'
import { Profile } from 'src/profile/profile.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      port: 5432,
      password: '',
      database: 'TestDB',
      entities: [Student, Team, User, Photo, Problem, Topic, Profile],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
