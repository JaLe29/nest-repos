import { Injectable, OnModuleInit } from '@nestjs/common'
import { CronExpression, Cron } from '@nestjs/schedule'
import { TasksService } from 'modules/tasks/tasks.service'
import { LessThan, MoreThan } from 'typeorm'
import { format } from 'date-fns'
import pLimit from 'p-limit'
import { TaskEntity } from 'modules/tasks/task.entity'

@Injectable()
export class SchedulerService implements OnModuleInit {
  limit = pLimit(5)

  constructor(
    private readonly tasksService: TasksService,
  ) { }

  onModuleInit() {
    setTimeout(async () => {
      await this.firePublisher()
    }, 10000)
  }

  async firePublisher() {
    const LessThanDate = (date: Date) => LessThan(format(date, 'yyyy-MM-dd HH:mm:ss'))

    // const tasksObj = await this.tasksService.findAll({ state: 'waiting', targetTime: LessThanDate(new Date()) })
    // const tasksLimits = tasksObj.map((t: TaskEntity) => this.limit(() => this.tasksService.publish(t.id)))
    // await Promise.all(tasksLimits)
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  // @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    await this.firePublisher()
  }
}
