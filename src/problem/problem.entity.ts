/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import { Topic } from '../topic/topic.etity';

@Entity()
@ObjectType()
export class Problem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  title: string;

  @Column()
  @Field({ nullable: false })
  difficulty: string;

  @ManyToMany(() => Topic, (topic) => topic.problems)
  @JoinTable()
  @Field(() => [Topic], { nullable: true })
  topics: Promise<Topic[]>;
}

@InputType()
export class ProblemInput {
  @Field({ nullable: false })
  title: string;
  @Field({ nullable: false })
  difficulty: string;
  @Field(() => Int, { nullable: true })
  topicId?: number;
}
