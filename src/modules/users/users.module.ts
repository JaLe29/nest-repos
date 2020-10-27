import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from 'modules/auth/auth.module';
import { UsersRepository } from './users.repository';
import { ContextModule } from 'modules/core/context/context.module';
import { TasksModule } from 'modules/tasks/tasks.module';

@Module({
  imports: [
    ContextModule,
    TasksModule,
    // (forwardRef(() => AuthModule)),
    // TypeOrmModule.forFeature([UserEntity]),
    // TypeOrmModule.forFeature([UserEntity, UserRepository]),
    // TypeOrmModule.forFeature([UsersRepository]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})

export class UsersModule { }
