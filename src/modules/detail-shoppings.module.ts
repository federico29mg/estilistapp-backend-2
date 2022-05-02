import { Module } from '@nestjs/common';
import { DetailShoppingsService } from '../services/detail-shoppings.service';
import { DetailShoppingsController } from '../controllers/detail-shoppings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DetailShopping } from 'src/models/detail-shopping.model';

@Module({
  imports: [SequelizeModule.forFeature([DetailShopping])],
  controllers: [DetailShoppingsController],
  providers: [DetailShoppingsService]
})
export class DetailShoppingsModule {}
