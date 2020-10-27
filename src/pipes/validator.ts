import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {

	async transform(value: any, { metatype }: ArgumentMetadata) {
		if (!metatype || !this.toValidate(metatype)) {
			return value
		}

		const t = { ...value }

		const object = plainToClass(metatype, t)
		const errors = await validate(object)

		if (errors.length > 0) {
			throw new BadRequestException('Validation failed')
		}
		return t
	}

	// tslint:disable-next-line: ban-types
	private toValidate(metatype: Function): boolean {
		// tslint:disable-next-line: ban-types
		const types: Function[] = [String, Boolean, Number, Array, Object]
		return !types.includes(metatype)
	}
}
