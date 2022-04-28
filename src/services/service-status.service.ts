import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ServiceStatus } from 'src/models/service-status.model';
import { CreateServiceStatusDto } from '../dtos/create-service-status.dto';
import { UpdateServiceStatusDto } from '../dtos/update-service-status.dto';

@Injectable()
export class ServiceStatusService {
  constructor(
    @InjectModel(ServiceStatus)
    private serviceStatusModel: typeof ServiceStatus
  ) {}
  
  create(createServiceStatusDto: CreateServiceStatusDto) {
    return 'This action adds a new serviceStatus';
  }

  findAll() {
    return `This action returns all serviceStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceStatus`;
  }

  update(id: number, updateServiceStatusDto: UpdateServiceStatusDto) {
    return `This action updates a #${id} serviceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceStatus`;
  }
}
