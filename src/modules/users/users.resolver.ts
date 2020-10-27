import { Args, Mutation, Resolver, Context, Query, ResolveProperty, Parent, Info, ResolveField, Int } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'
import { CreateUsersDto } from './dto/create-user.dto'
import { GenericResolver } from '../core/generic/generic.resolver'
import { UserEntity } from './user.entity'
import { WhereUserDto } from './dto/where-user.dto'
import { EditUserDto } from './dto/edit-user.dto'
import { JwtAuthGuard } from 'modules/auth/jwt-auth.guard'
import { CurrentUser } from 'modules/auth/decorators/user.decorator'
import { UseGuards } from '@nestjs/common'

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
    // (request as any).req.headers['server-side-dc-id']
    return this.usersService.test()
  }
}
