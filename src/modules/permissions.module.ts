import { Module } from '@nestjs/common';
import { PermissionsService } from '../services/permissions.service';
import { PermissionsController } from '../controllers/permissions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Permission } from 'src/models/permission.model';

@Module({
  imports: [SequelizeModule.forFeature([Permission])],
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
