/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Problem } from "../problem/problem.entity"
import { Field, Int, ObjectType ,InputType} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Topic {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field()
    name: string

    @ManyToMany(() => Problem, (problem) => problem.topics)
    @Field(() => [Problem], { nullable: true })
    problems: Promise<Problem[]>
}

@InputType()
export class TopicInput {
    @Field({ nullable: false })
    name: string;
}