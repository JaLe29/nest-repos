import { Injectable } from '@nestjs/common'
import { PubSub } from 'graphql-subscriptions'

@Injectable()
export class PublisherService {

	pubSub = new PubSub()

	public publish(triggerName: string, payload: any): Promise<void> {
		return this.pubSub.publish(triggerName, payload)
	}

	public asyncIterator(key: string): AsyncIterator<unknown, any, undefined> {
		return this.pubSub.asyncIterator(key)
	}

	public getSubscibersCount() {
		// force read subscriptions PRIVATE variable
		return Object.keys((this.pubSub as any).subscriptions).length
	}

}
