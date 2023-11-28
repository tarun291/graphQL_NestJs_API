/* eslint-disable prettier/prettier */
import {
  Int,
  Args,
  Query,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { Problem, ProblemInput } from './problem.entity';
import { ProblemService } from './problem.service';
@Resolver(() => Problem)
export class ProblemResolver {
  constructor(
    private readonly problemService: ProblemService,
  ) {}

  @Query(() => [Problem], { name: 'problems', nullable: false })
  async getProblems() {
    return await this.problemService.findAll();
  }

  @Query(() => Problem, { name: 'problem', nullable: true })
  async getProblemById(@Args({ name: 'id', type: () => Int }) id: number) {
    return await this.problemService.findById(id);
  }

  @Mutation(() => Problem, { name: 'createProblem' })
  async createProblem(@Args('data') input: ProblemInput): Promise<Problem> {
    return await this.problemService.createProblem(input);
  }
}
