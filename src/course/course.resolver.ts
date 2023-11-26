/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourse } from './dto/create-course.dto';
@Resolver(() => Course)
export class CourseResolver {
  constructor(private courseService: CourseService) {}
  @Mutation(() => Course)
  async create(@Args('createCourse') createCourse: CreateCourse): Promise<any> {
    return this.courseService.createcourse(createCourse);
  }
  @Query(() => [Course])
  async students(): Promise<Course[]> {
    return this.courseService.findAll();
  }
}
