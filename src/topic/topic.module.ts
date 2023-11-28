/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './topic.etity';
import { ProblemModule } from 'src/problem/problem.module';
import { TopicResolver } from './topic.resolver';
import { TopicService } from './topic.service';
@Module({
  imports: [TypeOrmModule.forFeature([Topic]), forwardRef(() => ProblemModule)],
  providers: [TopicResolver, TopicService],
  exports: [TopicService],
})
export class TopicModule {}
