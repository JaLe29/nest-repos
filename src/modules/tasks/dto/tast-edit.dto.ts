import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TaskEditDto {

  @Field(() => String, { nullable: true })
  name?: string

}
