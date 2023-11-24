/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudent } from './dto/create-student.dto';
import { UpdateStudent } from './dto/update-student.dto';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query(() => Student)
  async findStudent(@Args('id', { type: () => Int }) id: number): Promise<any> {
    return this.studentService.findById(id);
  }
  @Query(() => Student)
  async deleteStudent(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<any> {
    return this.studentService.remove(id);
  }
  @Mutation(() => Student)
  async create(
    @Args('createStudent') createStudent: CreateStudent,
  ): Promise<any> {
    return this.studentService.createStudent(createStudent);
  }
  @Mutation(() => Student)
  async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateStudent') updateStudent: UpdateStudent,
  ): Promise<any> {
    return this.studentService.update(id, updateStudent);
  }
  @Query(() => [Student])
  async students(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
