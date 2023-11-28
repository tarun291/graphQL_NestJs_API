/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Topic, TopicInput } from './topic.etity';
import { ProblemService } from 'src/problem/problem.service';
@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
    @Inject(forwardRef(() => ProblemService))
    private readonly problemService: ProblemService,
  ) {}

  async findAll() {
    return await this.topicRepository.find({
      relations: ['problems'],
    });
  }

  async findById(id: number) {
    return await this.topicRepository.findOne({
      where: {
        id: id,
      },
      relations: ['problems'],
    });
  }
  async findByIds(ids: number[]) {
    return await this.topicRepository.find({
      where: { id: In(ids) },
      relations: ['problems'],
    });
  }

  async createTopic(data: TopicInput) {
    const team = this.topicRepository.create(data);
    return await this.topicRepository.save(team);
  }

  async addProblem(problemId: number, topicId: number) {
    const topic = await this.findById(topicId);
    if (!topic) return null;
    const problem = await this.problemService.findById(problemId);
    if (problem) {
      (await topic.problems).push(problem);
      await this.topicRepository.save(topic);
    }
    return topic;
  }

  async removeProblem(problemId: number, topicId: number) {
    const topic = await this.findById(topicId);
    const problems = await topic.problems;

    const index = problems.findIndex((problem) => problem.id === problemId);

    if (index >= 0) {
      problems.splice(index, 1);
      await this.topicRepository.save(topic);
    }
    return topic;
  }
}
