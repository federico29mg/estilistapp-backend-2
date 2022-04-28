import { Module } from '@nestjs/common';
import { InventoriesService } from '../services/inventories.service';
import { InventoriesController } from '../controllers/inventories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inventory } from 'src/models/inventory.model';

@Module({
  imports: [SequelizeModule.forFeature([Inventory])],
  controllers: [InventoriesController],
  providers: [InventoriesService]
})
export class InventoriesModule {}
