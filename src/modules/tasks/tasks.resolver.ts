import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { CurrentUser } from 'modules/auth/decorators/user.decorator';
import { JwtAuthGuard } from 'modules/auth/jwt-auth.guard';
import { GenericResolver } from 'modules/core/generic/generic.resolver';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskWhereDto } from './dto/task-where.dto';
import { TaskDto } from './dto/task.dto';
import { TaskEditDto } from './dto/tast-edit.dto';
import { TaskEntity } from './task.entity';
import { TasksService } from './tasks.service'
import { PublisherService } from 'modules/core/publisher/publisher.service';

@Resolver(() => TaskDto)
export class TasksResolver
 /* extends GenericResolver(TaskDto, TaskCreateDto, TaskEditDto, TaskWhereDto, { name: 'Task' }) */ {

  constructor(
    private readonly tasksService: TasksService,
    private readonly publisherService: PublisherService,
  ) {
  }

}
