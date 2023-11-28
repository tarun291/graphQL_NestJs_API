/* eslint-disable prettier/prettier */
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
