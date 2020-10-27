import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TaskCreateDto {

  @Field(() => String)
  text: string
}
