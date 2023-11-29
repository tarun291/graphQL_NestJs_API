/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { Team } from '../team/team.entity';
import { Photo } from '../photo/photo.entity';
import { Profile } from 'src/profile/profile.entity';
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

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  @Field(() => [Profile], { nullable: true })
  profile: Profile;

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

  @Field(() => Int, { nullable: true })
  profileId?: number;
}
