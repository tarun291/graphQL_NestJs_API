/* eslint-disable prettier/prettier */
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
