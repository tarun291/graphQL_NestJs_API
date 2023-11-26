/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn , JoinTable, ManyToMany} from 'typeorm';
import { Course } from 'src/course/course.entity';
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
  @ManyToMany(() => Course)
  @JoinTable()
  @Field(() => [Course])
  courses: Course[]
}
