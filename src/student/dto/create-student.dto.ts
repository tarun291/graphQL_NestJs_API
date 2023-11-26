/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsOptional, } from 'class-validator';


@InputType()
export class CreateStudent {
  @Field()
  @IsString()
  name: string;

  @Field(() => Int)
  @IsInt()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  password?: number;

  // @Field(() => [Course], { nullable: true })
  // @IsOptional()
  // @IsArray()
  // courses?: Course[];
}
