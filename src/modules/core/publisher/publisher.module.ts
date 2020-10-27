import { Module } from '@nestjs/common'
import { PublisherService } from './publisher.service'

@Module({
	imports: [

	],
	providers: [
		PublisherService,
	],
	exports: [
		PublisherService,
	],
})
export class PublisherModule { }
