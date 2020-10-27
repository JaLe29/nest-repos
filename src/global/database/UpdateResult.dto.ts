import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UpdateResultRawDto {

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
  message: '(Rows matched: 1  Changed: 1  Warnings: 0';

  @Field(() => Boolean)
  protocol41: boolean;

  @Field(() => Int)
  changedRows: number;

}

@ObjectType()
export class UpdateResultDto {

  @Field(() => UpdateResultRawDto)
  raw: UpdateResultRawDto;

  @Field(() => Int)
  affected: number;

}
