import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class DeleteResultRawDto {

  @Field(() => Int)
  fieldCount: number;

  @Field(() => Int)
  affectedRows: number;

  @Field(() => Int)
  insertId: number;

  @Field(() => Int)
  serverStatus: number;

  @Field(() => Int)
  warningCount: number;

  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  protocol41: boolean;

  @Field(() => Int)
  changedRows: number;

}

@ObjectType()
export class DeleteResultDto {

  @Field(() => DeleteResultRawDto)
  raw: DeleteResultRawDto;

  @Field(() => Int)
  affected: number;

}
