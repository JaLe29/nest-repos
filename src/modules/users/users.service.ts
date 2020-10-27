import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { GenericService } from '../core/generic/generic.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { WhereUserDto } from './dto/where-user.dto';
import { AuthService } from 'modules/auth/auth.service';
import { REQUEST } from '@nestjs/core';
import { UsersRepository } from './users.repository';
import { getCustomRepository } from "typeorm";
import { UserRepository } from 'instagram-private-api/dist/repositories/user.repository';

@Injectable({ scope: Scope.REQUEST })
// @Injectable()
export class UsersService /*extends GenericService<UserEntity, CreateUsersDto, EditUserDto, WhereUserDto>*/ {

  usersRepository: any

  constructor(
    @Inject(REQUEST) private request: Request,
  ) {
    console.log('constructor UsersService')

    try {
      this.usersRepository = getCustomRepository(UsersRepository) as UsersRepository;

      // nastavim context
      this.usersRepository.setContext(request)
    } catch (e) {
      // padne pro request ktery neni scope request protoze se to nest stavi sestavit jeste drive nez existuje repozitar
      console.log(e)
    }
  }

  async test() {
    // console.log(this.request)
    console.log('test service')
    await this.usersRepository.test()
    return true
  }
}
