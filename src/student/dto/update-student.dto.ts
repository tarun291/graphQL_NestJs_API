/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class UpdateStudent {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  age: number;
}
