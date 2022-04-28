import { Module } from '@nestjs/common';
import { ModulosService } from '../services/modulos.service';
import { ModulosController } from '../controllers/modulos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Modulo } from 'src/models/modulo.model';

@Module({
  imports: [SequelizeModule.forFeature([Modulo])],
  controllers: [ModulosController],
  providers: [ModulosService]
})
export class ModulosModule {}
