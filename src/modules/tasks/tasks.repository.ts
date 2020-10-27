import { GenericRepository } from "modules/core/generic/generic.repository";
import { EntityRepository, Repository } from "typeorm";
import { TaskEntity } from "./task.entity";

@EntityRepository(TaskEntity)
export class TasksRepository extends GenericRepository<TaskEntity> {

  constructor(
  ) {
    super()
    console.log('constructor TasksRepository')
  }

  async test(): Promise<void> {
    // ctx id dostupny vsude
    console.log('TasksRepository contextId: ' + this.getCtxId())

    // cteni meho contextu
    console.log('TasksRepository context: ' + JSON.stringify(this.getContextService().getContext(this.ctxId), null, 2))

    // potrebuji master ?
    console.log('TasksRepository potrebuji master: ' + !!this.getContextService().getContext(this.ctxId).forceMaster)
  }

}
