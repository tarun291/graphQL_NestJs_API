/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
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
  @Field()
  age: number;
  @Column({ nullable: true })
  @Field()
  email: string;
  @Column({ nullable: true })
  @Field()
  password: number;
}
