
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { GenericService } from 'modules/core/generic/generic.service'
import { Repository } from 'typeorm'
import { TaskEntity } from './task.entity'
import { readFile, unlinkSync, } from 'fs';
import { v4 as uuidv4 } from 'uuid';
// @ts-ignore
import shell from 'shelljs';
// @ts-ignore
import { IgApiClient } from 'instagram-private-api';
import { PublisherService } from 'modules/core/publisher/publisher.service'
import { promisify } from 'util';
const readFileAsync = promisify(readFile);

@Injectable()
export class TasksService {

  constructor(
    // @InjectRepository(TaskEntity)
    // taskRepository: Repository<TaskEntity>,
  ) {
    // super(
    //   taskRepository,
    // )
  }
}
