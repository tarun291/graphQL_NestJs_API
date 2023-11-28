/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './problem.entity';
import { ProblemService } from './problem.service';
import { ProblemResolver } from './problem.resolver';
import { TopicModule } from 'src/topic/topic.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Problem]),
    forwardRef(() => TopicModule),
  ],
  providers: [ProblemResolver, ProblemService],
  exports: [ProblemService],
})
export class ProblemModule {}
