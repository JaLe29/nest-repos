import { Inject } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { basename } from 'path'
import { getCustomRepository, Repository } from 'typeorm'
import { ContextService } from '../context/context.service'

export class GenericService {

  // TODO LEPSI JMENO, nejlepe pojmenovat jako to z ceho se dedi, nebo to necpat sem
  serviceRepository: any

  constructor(
    baseName: string,
    ctxId: string,
    contextService: ContextService,
    repository,
  ) {
    console.log('constructor GenericService - ' + baseName)

    this.serviceRepository = getCustomRepository(repository)
    this.serviceRepository.setContextService(contextService)
    this.serviceRepository.setContextId(ctxId)
  }


}
