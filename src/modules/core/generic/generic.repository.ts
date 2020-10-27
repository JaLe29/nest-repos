import { EntityRepository, Repository } from "typeorm";
// import { UserEntity } from "./user.entity";

export class GenericRepository<Entity> extends Repository<Entity>  {

  // nejaky context apky
  protected context: any

  setContext(ctx: any) {
    console.log('nastavuji context v GenericRepository')
    this.context = ctx
  }
}