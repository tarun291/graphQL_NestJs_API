/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Parent, Query, ResolveField,  Resolver } from '@nestjs/graphql';
import { Team, TeamInput } from './team.entity';
import { TeamService } from './team.service';
import { UserService } from '../user/user.service';
import { forwardRef, Inject } from '@nestjs/common';
import { User } from '../user/user.entity';

@Resolver(() => Team)
export class TeamResolver {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly teamService: TeamService,
  ) {
  }

  @Query(() => [Team], {name: 'teams', nullable: true})
  async getTeams() {
    return this.teamService.findAll();
  }

  @Query(() => Team, {name:'team', nullable: true })
  async getTeamById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.teamService.findById(id);
  }

  @Mutation(() => Team, { name: 'createTeam'})
  async createTeam(@Args('data') input: TeamInput): Promise<Team> {
    return this.teamService.createTeam(input);
  }

  @Mutation(() => Team, { nullable: true })
  async addMember(
    @Args({ name: 'teamId', type: () => Int }) teamId: number,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.teamService.addMember(teamId, userId);
  }

  @Mutation(() => Team, { nullable: true })
  async removeMember(
    @Args({ name: 'teamId', type: () => Int }) teamId: number,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.teamService.removeMember(teamId, userId);
  }

  @ResolveField('members', () => [ User ], { nullable: true })
  async getMembers(@Parent() team: Team) {
    return await team.members;
  }
}