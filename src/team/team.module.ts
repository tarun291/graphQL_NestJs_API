/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { TeamResolver } from './team.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Team ]),
    forwardRef(() => UserModule),
  ],
  providers: [ TeamService, TeamResolver ],
  exports: [ TeamService ],
})
export class TeamModule {
}