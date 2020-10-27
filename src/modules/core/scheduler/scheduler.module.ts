import { Module } from '@nestjs/common'
import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule'
import { TasksModule } from 'modules/tasks/tasks.module'
import { SchedulerService } from './scheduler.service'

@Module({
  imports: [
    TasksModule,
    NestScheduleModule.forRoot(),
  ],
  providers: [
    SchedulerService,
  ],
  exports: [
    SchedulerService,
  ],
})
export class SchedulerModule { }
