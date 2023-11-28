/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudent } from './dto/create-student.dto';
import { UpdateStudent } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}
  async createStudent(createStudent: CreateStudent): Promise<any> {
    const newStudent = this.studentRepo.create(createStudent);
    await this.studentRepo.save(newStudent);
    return newStudent;
  }
  async findAll(): Promise<Student[]> {
    const students = await this.studentRepo.find();
    return students;
  }
  async findById(id: number): Promise<Student> {
    return await this.studentRepo.findOne({ where: { id: id } });
  }
  async remove(id: number): Promise<any> {
    return await this.studentRepo.delete(id);
  }
  async update(id: number, updateStudent: UpdateStudent): Promise<any> {
    const student = await this.studentRepo.findOne({ where: { id: id } });
    this.studentRepo.merge(student, updateStudent);
    const result = await this.studentRepo.save(student);
    return result;
  }
}
