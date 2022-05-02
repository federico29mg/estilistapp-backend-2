import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shopping } from 'src/models/shopping.model';
import { CreateShoppingDto } from '../dtos/create-shopping.dto';
import { UpdateShoppingDto } from '../dtos/update-shopping.dto';

@Injectable()
export class ShoppingsService {
  constructor(
    @InjectModel(Shopping)
    private shoppingModel: typeof Shopping
  ) {}
  
  create(createShoppingDto: CreateShoppingDto) {
    return 'This action adds a new shopping';
  }

  findAll() {
    return `This action returns all shoppings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopping`;
  }

  update(id: number, updateShoppingDto: UpdateShoppingDto) {
    return `This action updates a #${id} shopping`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopping`;
  }
}
