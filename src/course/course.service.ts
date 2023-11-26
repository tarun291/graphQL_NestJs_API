/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourse } from './dto/create-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}
  async createcourse(createCourse: CreateCourse): Promise<any> {
    const newcourse = this.courseRepo.create(createCourse);
    this.courseRepo.save(newcourse);
    return newcourse;
  }
  async findAll(): Promise<Course[]> {
    const courses=await this.courseRepo.find();
    return courses;
  }
}
