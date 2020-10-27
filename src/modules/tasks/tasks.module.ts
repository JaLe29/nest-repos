
import { Module } from '@nestjs/common'
import { ContextModule } from 'modules/core/context/context.module'
import { TasksService } from './tasks.service'

@Module({
  imports: [
    ContextModule,
  ],
  providers: [TasksService],
  exports: [TasksService],
})

export class TasksModule { }
