/* eslint-disable prettier/prettier */
import {
  Int,
  Args,
  Parent,
  Query,
  Mutation,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { User, UserInput } from './user.entity';
import { UserService } from './user.service';
import { TeamService } from '../team/team.service';
import { forwardRef, Inject } from '@nestjs/common';
import { Team } from '../team/team.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
  ) {}

  @Query(() => [User], { name: 'users', nullable: false })
  async getUsers() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUserById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('data') input: UserInput): Promise<User> {
    return this.userService.createUser(input);
  }

  @Mutation(() => User, { nullable: true })
  async addPhoto(
    @Args({ name: 'photoId', type: () => Int }) photoId: number,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.userService.addPhoto(userId, photoId);
  }

  @ResolveField('teams', () => [Team], { nullable: false })
  async getTeams(@Parent() user: User) {
    return await user.teams;
  }
}
