import { Repository } from 'typeorm';
import { PaginationArgs } from 'global/args/PaginationArgs';
import { DeleteResultDto } from 'global/database/DeleteResult.dto';
import { UpdateResultDto } from 'global/database/UpdateResult.dto';

export class GenericService<Entity, CreateDto, EditDto, WhereDto> {

  constructor(
    protected readonly repository: Repository<Entity>,
  ) { }

  public findOne(where: WhereDto | any): Promise<Entity | undefined> {
    const options = {
      where,
    };
    return this.repository.findOne(options);
  }

  public findAll(where: WhereDto | any /* order?: { [P in keyof Entity]?: 'ASC' | 'DESC' } */, pagination?: PaginationArgs): Promise<Entity[]> {
    const options: any = {
      where,
      ...(pagination && {
        offset: pagination.offset,
        take: pagination.limit,
      }),
      order: { createdAt: 'DESC' },
    };

    return this.repository.find(options);
  }

  public update(where: WhereDto, data: EditDto): Promise<UpdateResultDto> {
    return this.repository.update(where, data) as Promise<UpdateResultDto>;
  }

  public delete(id: number): Promise<DeleteResultDto> {
    return this.repository.delete(id) as Promise<DeleteResultDto>;
  }

  public createOne(data: CreateDto & any): Promise<Entity> {
    return this.repository.save(data);
  }

}
