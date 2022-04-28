import { Module } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { RolesController } from '../controllers/roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
