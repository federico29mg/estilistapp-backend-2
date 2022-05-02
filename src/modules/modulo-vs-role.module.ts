import { Module } from '@nestjs/common';
import { ModuloVsRoleService } from '../services/modulo-vs-role.service';
import { ModuloVsRoleController } from '../controllers/modulo-vs-role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModuloVsRole } from 'src/models/modulo-vs-role.model';

@Module({
  imports: [SequelizeModule.forFeature([ModuloVsRole])],
  controllers: [ModuloVsRoleController],
  providers: [ModuloVsRoleService]
})
export class ModuloVsRoleModule {}
