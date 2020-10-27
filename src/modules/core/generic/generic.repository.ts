import { EntityRepository, Repository } from "typeorm";
import { ContextService } from "../context/context.service";
// import { UserEntity } from "./user.entity";

export class GenericRepository<Entity> extends Repository<Entity>  {

  ctxId: string
  contextService: ContextService

  public getCtxId() {
    return this.ctxId
  }

  public getContextService() {
    return this.contextService
  }

  setContextId(ctxId: string) {
    this.ctxId = ctxId
  }

  setContextService(contextService) {
    this.contextService = contextService
  }
}
