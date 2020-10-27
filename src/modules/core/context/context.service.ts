import { Injectable } from '@nestjs/common'

@Injectable()
export class ContextService {

  contextMap = {}

  constructor() {
    // SINGLETON
    console.log('------------------------------------------------> constructor ContextService')
  }

  setContext(ctxId: string, ctx: any) {
    this.contextMap[ctxId] = ctx
  }

  updateContext(ctxId: string, ctxKey: string, ctxValue: any) {
    this.contextMap[ctxId][ctxKey] = ctxValue
  }

  clearContext(ctxId: string) {
    delete this.contextMap[ctxId]
  }

  getContext(ctxId) {
    return this.contextMap[ctxId]
  }
}
