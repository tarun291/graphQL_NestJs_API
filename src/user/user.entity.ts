/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { Team } from '../team/team.entity';
import { Photo } from '../photo/photo.entity';
@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  firstName: string;

  @Column()
  @Field({ nullable: false })
  lastName: string;

  @ManyToMany(() => Team, (team) => team.members)
  @Field(() => [Team], { nullable: true })
  teams: Promise<Team[]>;

  @OneToMany(() => Photo, (photo) => photo.user)
  @Field(() => [Photo], { nullable: true })
  photos: Promise<Photo[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field(() => Int, { nullable: true })
  teamId?: number;

  @Field(() => Int, { nullable: true })
  photoId?: number;
}
