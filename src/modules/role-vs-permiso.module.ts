import { Module } from '@nestjs/common';
import { RoleVsPermisoService } from '../services/role-vs-permiso.service';
import { RoleVsPermisoController } from '../controllers/role-vs-permiso.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleVsPermiso } from 'src/models/role-vs-permiso.model';

@Module({
  imports: [SequelizeModule.forFeature([RoleVsPermiso])],
  controllers: [RoleVsPermisoController],
  providers: [RoleVsPermisoService]
})
export class RoleVsPermisoModule {}
