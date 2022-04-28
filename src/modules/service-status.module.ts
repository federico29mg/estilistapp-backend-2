import { Module } from '@nestjs/common';
import { ServiceStatusService } from '../services/service-status.service';
import { ServiceStatusController } from '../controllers/service-status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServiceStatus } from 'src/models/service-status.model';

@Module({
  imports: [SequelizeModule.forFeature([ServiceStatus])],
  controllers: [ServiceStatusController],
  providers: [ServiceStatusService]
})
export class ServiceStatusModule {}
