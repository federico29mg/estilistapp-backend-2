import { Module } from '@nestjs/common';
import { SalesService } from '../services/sales.service';
import { SalesController } from '../controllers/sales.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from 'src/models/sale.model';

@Module({
  imports: [SequelizeModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
