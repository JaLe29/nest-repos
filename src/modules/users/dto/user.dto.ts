import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserDto {

  @Field()
  id: string

  @Field()
  email: string

  @Field()
  name: string

}
