import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class EditUserDto {
	@Field()
	name: string
}
