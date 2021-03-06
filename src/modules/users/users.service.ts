import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core';
import { UsersRepository } from './users.repository';
import { getCustomRepository, getManager } from "typeorm";
import { ContextService } from 'modules/core/context/context.service';
import { GenericService } from 'modules/core/generic/generic.service';
import { TasksService } from 'modules/tasks/tasks.service';
import { TasksRepository } from 'modules/tasks/tasks.repository';

@Injectable({ scope: Scope.REQUEST })
export class UsersService extends GenericService {

  constructor(
    @Inject(REQUEST) request: Request,
    readonly contextService: ContextService,
    private readonly tasksService: TasksService,
  ) {
    super(
      'User',
      (request as any).req.headers['server-side-dc-id'],
      contextService,
      UsersRepository,
    )
  }

  async test() {
    console.log('/* --------------------------------------------------------------------------------------- */')
    await this.serviceRepository.test()
    console.log('--------------')
    await this.tasksService.test()
    console.log('/* --------------------------------------------------------------------------------------- */')
    return true
  }

  async testTransakce() {
    console.log('testTransakce')

    await getManager().transaction(async transactionalEntityManager => {
      const email = `transakce-${new Date().getTime()}fake-email`

      const userRepository = transactionalEntityManager.getCustomRepository(UsersRepository)
      userRepository.setContextService(this.contextService)
      userRepository.setContextId(this.contextId)
      await userRepository.createUser(email)

      const text = `transakce-${new Date().getTime()}fake-text`

      const tasksRepository = transactionalEntityManager.getCustomRepository(TasksRepository)
      tasksRepository.setContextService(this.contextService)
      tasksRepository.setContextId(this.contextId)

      await tasksRepository.createTask(text)

      throw new Error('😈')
    })

    return true
  }
}
