import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Inventory } from 'src/models/inventory.model';
import { CreateInventoryDto } from '../dtos/create-inventory.dto';
import { UpdateInventoryDto } from '../dtos/update-inventory.dto';

@Injectable()
export class InventoriesService {
  constructor(
    @InjectModel(Inventory)
    private inventoryModel: typeof Inventory
  ) {}
  
  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  findAll() {
    return `This action returns all inventories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
