import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from 'modules/auth/auth.module';

@Module({
	imports: [
		(forwardRef(() => AuthModule)),
		TypeOrmModule.forFeature([UserEntity]),
	],
	providers: [UsersService],
	exports: [UsersService],
})

export class UsersModule { }
