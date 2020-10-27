import { Field, InputType, Int } from '@nestjs/graphql';
import { TaskEditDto } from './tast-edit.dto';

@InputType()
export class TaskWhereDto extends TaskEditDto {

  @Field(() => String)
  id: string

  @Field(() => String)
  name: string
}
