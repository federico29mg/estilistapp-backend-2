import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DetailApplicationService } from 'src/models/detail-application-service.model';
import { CreateDetailApplicationServiceDto } from '../dtos/create-detail-application-service.dto';
import { UpdateDetailApplicationServiceDto } from '../dtos/update-detail-application-service.dto';

@Injectable()
export class DetailApplicationServiceService {
  constructor(
    @InjectModel(DetailApplicationService)
    private detailApplicationServiceModel: typeof DetailApplicationService
  ) {}

  create(createDetailApplicationServiceDto: CreateDetailApplicationServiceDto) {
    return 'This action adds a new detailApplicationService';
  }

  findAll() {
    return `This action returns all detailApplicationService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailApplicationService`;
  }

  update(id: number, updateDetailApplicationServiceDto: UpdateDetailApplicationServiceDto) {
    return `This action updates a #${id} detailApplicationService`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailApplicationService`;
  }
}
