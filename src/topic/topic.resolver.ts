/* eslint-disable prettier/prettier */
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from './topic.etity';
import { TeamInput } from 'src/team/team.entity';
@Resolver(() => Topic)
export class TopicResolver {
  constructor(
    @Inject(forwardRef(() => TopicService))
    private readonly topicService: TopicService,
  ) {}
  @Query(() => [Topic], { name: 'topics', nullable: true })
  async getTopics() {
    return this.topicService.findAll();
  }

  @Query(() => Topic, { name: 'topic', nullable: true })
  async getTopicById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.topicService.findById(id);
  }

  @Mutation(() => Topic, { name: 'createTopic' })
  async createTeam(@Args('data') input: TeamInput): Promise<Topic> {
    return this.topicService.createTopic(input);
  }

  @Mutation(() => Topic, { nullable: true })
  async addProblem(
    @Args({ name: 'problemId', type: () => Int }) problemId: number,
    @Args({ name: 'topicId', type: () => Int }) topicId: number,
  ) {
    return this.topicService.addProblem(problemId, topicId);
  }

  @Mutation(() => Topic, { nullable: true })
  async removeProblem(
    @Args({ name: 'problemId', type: () => Int }) problemId: number,
    @Args({ name: 'topicId', type: () => Int }) topicId: number,
  ) {
    return this.topicService.removeProblem(problemId, topicId);
  }
}
