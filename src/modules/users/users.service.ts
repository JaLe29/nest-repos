import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { GenericService } from '../core/generic/generic.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { WhereUserDto } from './dto/where-user.dto';
import { AuthService } from 'modules/auth/auth.service';

@Injectable({ scope: Scope.REQUEST })
export class UsersService extends GenericService<UserEntity, CreateUsersDto, EditUserDto, WhereUserDto>  {

  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
    super(usersRepository)
  }

  test() {
    console.log(this)
    console.log('test service')
    return true
  }
}
