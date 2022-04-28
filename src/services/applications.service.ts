import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from 'src/models/application.model';
import { CreateApplicationDto } from '../dtos/create-application.dto';
import { UpdateApplicationDto } from '../dtos/update-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationModel: typeof Application
  ) {}
  
  create(createApplicationDto: CreateApplicationDto) {
    return 'This action adds a new application';
  }

  findAll() {
    return `This action returns all applications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
