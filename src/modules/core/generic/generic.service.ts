import { getCustomRepository } from 'typeorm'
import { ContextService } from '../context/context.service'

export class GenericService {

  // TODO LEPSI JMENO, nejlepe pojmenovat jako to z ceho se dedi, nebo to necpat sem
  serviceRepository: any
  contextId: string

  constructor(
    baseName: string,
    ctxId: string,
    contextService: ContextService,
    repository,
  ) {
    console.log('constructor GenericService - ' + baseName)

    this.serviceRepository = getCustomRepository(repository)
    this.contextId = ctxId

    this.serviceRepository.setContextService(contextService)
    this.serviceRepository.setContextId(ctxId)
  }


}
