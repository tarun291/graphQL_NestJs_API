/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCourse {
  @Field()
  @IsString()
  courseName: string;
}
