import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FailedJob } from 'src/models/failed-job.model';
import { CreateFailedJobDto } from '../dtos/create-failed-job.dto';
import { UpdateFailedJobDto } from '../dtos/update-failed-job.dto';

@Injectable()
export class FailedJobsService {
  constructor(
    @InjectModel(FailedJob)
    private failedJobModel: typeof FailedJob,
  ) {}

  create(createFailedJobDto: CreateFailedJobDto) {
    return 'This action adds a new failedJob';
  }

  findAll() {
    return `This action returns all failedJobs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} failedJob`;
  }

  update(id: number, updateFailedJobDto: UpdateFailedJobDto) {
    return `This action updates a #${id} failedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} failedJob`;
  }
}
