import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Provider } from 'src/models/provider.model';
import { CreateProviderDto } from '../dtos/create-provider.dto';
import { UpdateProviderDto } from '../dtos/update-provider.dto';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectModel(Provider)
    private providerModel: typeof Provider
  ) {}

  create(createProviderDto: CreateProviderDto) {
    return 'This action adds a new provider';
  }

  findAll() {
    return `This action returns all providers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
