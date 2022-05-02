import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleVsPermisoService } from '../services/role-vs-permiso.service';
import { CreateRoleVsPermisoDto } from '../dtos/create-role-vs-permiso.dto';
import { UpdateRoleVsPermisoDto } from '../dtos/update-role-vs-permiso.dto';

@Controller('role-vs-permiso')
export class RoleVsPermisoController {
  constructor(private readonly roleVsPermisoService: RoleVsPermisoService) {}

  @Post()
  create(@Body() createRoleVsPermisoDto: CreateRoleVsPermisoDto) {
    return this.roleVsPermisoService.create(createRoleVsPermisoDto);
  }

  @Get()
  findAll() {
    return this.roleVsPermisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleVsPermisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleVsPermisoDto: UpdateRoleVsPermisoDto) {
    return this.roleVsPermisoService.update(+id, updateRoleVsPermisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleVsPermisoService.remove(+id);
  }
}
