/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile, ProfileInput } from './profile.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}
  @Query(() => Profile, { name: 'team', nullable: true })
  async getTeamById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.profileService.findById(id);
  }

  @Mutation(() => Profile, { name: 'createProfile' })
  async createProfile(@Args('data') input: ProfileInput): Promise<Profile> {
    return this.profileService.createProfile(input);
  }
}
