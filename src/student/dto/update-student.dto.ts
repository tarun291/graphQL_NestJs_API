/* eslint-disable prettier/prettier */
import { PartialType, InputType } from '@nestjs/graphql';
import { CreateStudent } from './create-student.dto';
@InputType()
export class UpdateStudent extends PartialType(CreateStudent) {}
