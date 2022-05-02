import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DetailShopping } from 'src/models/detail-shopping.model';
import { CreateDetailShoppingDto } from '../dtos/create-detail-shopping.dto';
import { UpdateDetailShoppingDto } from '../dtos/update-detail-shopping.dto';

@Injectable()
export class DetailShoppingsService {
  constructor(
    @InjectModel(DetailShopping)
    private detailShoppingModel: typeof DetailShopping
  ) {}

  create(createDetailShoppingDto: CreateDetailShoppingDto) {
    return 'This action adds a new detailShopping';
  }

  findAll() {
    return `This action returns all detailShoppings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailShopping`;
  }

  update(id: number, updateDetailShoppingDto: UpdateDetailShoppingDto) {
    return `This action updates a #${id} detailShopping`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailShopping`;
  }
}
