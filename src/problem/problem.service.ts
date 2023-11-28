/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Problem, ProblemInput } from './problem.entity';
import { TopicService } from 'src/topic/topic.service';
@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
    private readonly topicService: TopicService,
  ) {}

  async findAll() {
    return await this.problemRepository.find({
      relations: ['topics'],
    });
  }

  async findById(id: number) {
    const problemDetails = await this.problemRepository.findOne({
      where: { id: id },
      relations: ['topics'],
    });
    return problemDetails;
  }

  async createProblem(data: ProblemInput) {
    const problem = await this.problemRepository.save(
      this.problemRepository.create(data),
    );
    if (data.topicId) {
      await this.topicService.addProblem(problem.id, data.topicId);
    }
    return problem;
  }

  async findByIds(ids: number[]) {
    return await this.problemRepository.find({
      where: { id: In(ids) },
      relations: ['topics'],
    });
  }
}
