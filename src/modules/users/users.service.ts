import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core';
import { UsersRepository } from './users.repository';
import { getCustomRepository } from "typeorm";
import { ContextService } from 'modules/core/context/context.service';
import { GenericService } from 'modules/core/generic/generic.service';
import { TasksService } from 'modules/tasks/tasks.service';

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
    await this.serviceRepository.test()
    console.log('/////////////////////////////////////////////////////////////////////')
    await this.tasksService.test()
    return true
  }
}
