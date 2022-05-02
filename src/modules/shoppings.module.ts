import { Module } from '@nestjs/common';
import { ShoppingsService } from '../services/shoppings.service';
import { ShoppingsController } from '../controllers/shoppings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shopping } from 'src/models/shopping.model';

@Module({
  imports: [SequelizeModule.forFeature([Shopping])],
  controllers: [ShoppingsController],
  providers: [ShoppingsService]
})
export class ShoppingsModule {}
