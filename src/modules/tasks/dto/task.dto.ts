import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TaskDto {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  state: string

  @Field(() => String)
  type: string

  @Field(() => String)
  text: string

  @Field(() => [String])
  images: string[]

  @Field(() => Boolean)
  published: boolean

  @Field(() => Date, { nullable: true })
  targetTime: Date

  @Field(() => Date, { nullable: true })
  publishedTime: Date
}
