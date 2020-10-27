import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from 'modules/auth/auth.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    // (forwardRef(() => AuthModule)),
    // TypeOrmModule.forFeature([UserEntity]),
    // TypeOrmModule.forFeature([UserEntity, UserRepository]),
    // TypeOrmModule.forFeature([UsersRepository]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})

export class UsersModule { }
