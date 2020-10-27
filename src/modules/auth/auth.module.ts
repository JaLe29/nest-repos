import { Module, forwardRef } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
// import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants'
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from '../users/users.service'

@Module({
	imports: [
		(forwardRef(() => UsersModule)),
		PassportModule,
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '7d' },
		}),
	],
	providers: [AuthService, JwtStrategy],
	exports: [AuthService],
})
export class AuthModule { }