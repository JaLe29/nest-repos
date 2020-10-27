import { Module } from '@nestjs/common'
import { GraphqlModule } from '../graphql/graphql.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../modules/users/user.entity';
import { TaskEntity } from 'modules/tasks/task.entity';
import { SchedulerModule } from 'modules/core/scheduler/scheduler.module';
import { ENV_DB } from 'const/env';
import { ServeStaticModule } from '@nestjs/serve-static'
import path from 'path'

@Module({
  imports: [
    GraphqlModule,
    SchedulerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: ENV_DB,
      charset: "utf8mb4_unicode_ci",
      extra: {
        charset: "utf8mb4_unicode_ci",
      },
      entities: [
        UserEntity,
        TaskEntity,
      ],
      synchronize: true,
    }),
  ],
})
export class AppModule { }
