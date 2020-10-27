
import { Inject, Injectable, Scope } from '@nestjs/common'
import { GenericService } from 'modules/core/generic/generic.service'
import { TasksRepository } from './tasks.repository'
import { ContextService } from 'modules/core/context/context.service'
import { REQUEST } from '@nestjs/core'

@Injectable({ scope: Scope.REQUEST })
export class TasksService extends GenericService  {

  constructor(
    @Inject(REQUEST) request: Request,
    readonly contextService: ContextService,
  ) {
    super(
      'Task',
      (request as any).req.headers['server-side-dc-id'],
      contextService,
      TasksRepository,
    )
  }

  async test() {
    await this.serviceRepository.test()
    return true
  }
}
