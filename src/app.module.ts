/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { DatabaseModule } from './database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProblemModule } from './problem/problem.module';
import { TopicModule } from './topic/topic.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    StudentModule,
    TeamModule,
    UserModule,
    PhotoModule,
    ProblemModule,
    TopicModule,
    ProfileModule
  ],
  providers: [AppService],
})
export class AppModule {}
