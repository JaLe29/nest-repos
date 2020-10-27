import { Inject } from "@nestjs/common";
import { GenericRepository } from "modules/core/generic/generic.repository";
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@EntityRepository(UserEntity)
export class UsersRepository extends GenericRepository<UserEntity> {

  constructor(
  ) {
    super()
    console.log('constructor UsersRepository')
  }

  async test(): Promise<void> {
    console.log('user repository');
    const r = await this.save({ email: `${new Date().getTime()}fake-email` })
    console.log(r)
  }

}
