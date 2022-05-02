import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleVsPermiso } from 'src/models/role-vs-permiso.model';
import { CreateRoleVsPermisoDto } from '../dtos/create-role-vs-permiso.dto';
import { UpdateRoleVsPermisoDto } from '../dtos/update-role-vs-permiso.dto';

@Injectable()
export class RoleVsPermisoService {
  constructor(
    @InjectModel(RoleVsPermiso)
    private roleVsPermisoModel: typeof RoleVsPermiso
  ) {}
  
  create(createRoleVsPermisoDto: CreateRoleVsPermisoDto) {
    return 'This action adds a new roleVsPermiso';
  }

  findAll() {
    return `This action returns all roleVsPermiso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleVsPermiso`;
  }

  update(id: number, updateRoleVsPermisoDto: UpdateRoleVsPermisoDto) {
    return `This action updates a #${id} roleVsPermiso`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleVsPermiso`;
  }
}
