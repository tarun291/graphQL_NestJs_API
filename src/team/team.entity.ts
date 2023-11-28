/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
  import { User } from '../user/user.entity';
  
  @Entity('teams')
  @ObjectType()
  export class Team {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;
  
    @Column()
    @Field({ nullable: false })
    name: string;
  
    @ManyToMany(() => User, user => user.teams)
    @JoinTable()
    @Field(() => [ User ], { nullable: true })
    members: Promise<User[]>;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  
  @InputType()
  export class TeamInput {
    @Field({ nullable: false })
    name: string;
  }