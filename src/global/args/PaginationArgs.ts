import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationArgs {

  @Field(() => Int)
  offset = 0;

  @Field(() => Int)
  limit = 10;

}
