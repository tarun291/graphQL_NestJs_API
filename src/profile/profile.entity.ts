/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';
@Entity()
@ObjectType()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  gender: string;

  @Column()
  @Field()
  photo: string;

  @OneToOne(() => User, (user) => user.profile)
  @Field(() => [User], { nullable: true })
  user: User;
}

@InputType()
export class ProfileInput {
  @Field({ nullable: false })
  gender: string;
  @Field()
  photo: string;
}
