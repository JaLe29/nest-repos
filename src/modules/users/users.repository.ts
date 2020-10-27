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
    // ctx id dostupny vsude
    console.log('UsersRepository contextId: ' + this.getCtxId())

    // cteni meho contextu
    console.log('UsersRepository context: ' + JSON.stringify(this.getContextService().getContext(this.ctxId), null, 2))

    // potrebuji master ?
    console.log('UsersRepository potrebuji master: ' + !!this.getContextService().getContext(this.ctxId).forceMaster)

    const r = await this.save({ email: `${new Date().getTime()}fake-email` })

    // ok udelali jsme zapis a ted potrebujeme vsude vedet ze musime pouzivat vzdy master
    this.getContextService().updateContext(this.getCtxId(), 'forceMaster', true)

    console.log(r)
  }

}
