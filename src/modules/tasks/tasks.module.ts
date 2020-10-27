
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PublisherModule } from 'modules/core/publisher/publisher.module'
import { TaskEntity } from './task.entity'
import { TasksService } from './tasks.service'

@Module({
  imports: [
    PublisherModule,
    // TypeOrmModule.forFeature([TaskEntity]),
  ],
  providers: [TasksService],
  exports: [TasksService],
})

export class TasksModule { }
