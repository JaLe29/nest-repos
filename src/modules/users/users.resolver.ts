import { Resolver, Context, Query } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'
import { CreateUsersDto } from './dto/create-user.dto'
import { GenericResolver } from '../core/generic/generic.resolver'
import { WhereUserDto } from './dto/where-user.dto'
import { EditUserDto } from './dto/edit-user.dto'
@Resolver(() => UserDto)
export class UsersResolver extends GenericResolver(
  UserDto,
  CreateUsersDto,
  EditUserDto,
  WhereUserDto,
  { name: 'User' }
) {
  constructor(
    private readonly usersService: UsersService,
  ) {
    super(usersService)
  }

  @Query(() => Boolean)
  public test(@Context() ctx) {
    console.log(ctx.req.headers['server-side-dc-id'])
    return this.usersService.test()
  }

  @Query(() => Boolean)
  public testTransakce(@Context() ctx) {
    console.log(ctx.req.headers['server-side-dc-id'])
    return this.usersService.testTransakce()
  }
}
