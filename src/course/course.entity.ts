/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Course {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Column()
  @Field()
  courseName: string;
}
