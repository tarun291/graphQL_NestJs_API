/* eslint-disable prettier/prettier */
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
@ObjectType()
export class Photo {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  url: string;

  @ManyToOne(() => User, (user) => user.photos)
  @Field(() => [User], { nullable: true })
  user: User;
}

@InputType()
export class PhotoInput {
  @Field({ nullable: false })
  url: string;
}
