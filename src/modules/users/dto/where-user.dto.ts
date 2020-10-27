import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class WhereUserDto {

  @Field()
  id: string

  @Field()
  email: string

  @Field()
  name: string

}
