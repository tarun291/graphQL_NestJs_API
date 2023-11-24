/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field(() => Int)
  age: number;
}
