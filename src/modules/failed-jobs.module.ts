import { Module } from '@nestjs/common';
import { FailedJobsService } from '../services/failed-jobs.service';
import { FailedJobsController } from '../controllers/failed-jobs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FailedJob } from 'src/models/failed-job.model';

@Module({
  imports: [SequelizeModule.forFeature([FailedJob])],
  controllers: [FailedJobsController],
  providers: [FailedJobsService]
})
export class FailedJobsModule {}
