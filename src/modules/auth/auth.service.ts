
import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email })
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user
      return result
    }
    throw new Error('Invalid credentials')
  }

  login(user: any) {
    const payload = { username: user.email, userId: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  decodeToken(token: string | null) {
    if (!token) return null
    const parts = token.split(' ')
    if (parts.length !== 2) return null
    return this.jwtService.decode(parts[1])
  }
}
