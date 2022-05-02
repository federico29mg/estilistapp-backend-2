import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModuloVsRoleService } from '../services/modulo-vs-role.service';
import { CreateModuloVsRoleDto } from '../dtos/create-modulo-vs-role.dto';
import { UpdateModuloVsRoleDto } from '../dtos/update-modulo-vs-role.dto';

@Controller('modulo-vs-role')
export class ModuloVsRoleController {
  constructor(private readonly moduloVsRoleService: ModuloVsRoleService) {}

  @Post()
  create(@Body() createModuloVsRoleDto: CreateModuloVsRoleDto) {
    return this.moduloVsRoleService.create(createModuloVsRoleDto);
  }

  @Get()
  findAll() {
    return this.moduloVsRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduloVsRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuloVsRoleDto: UpdateModuloVsRoleDto) {
    return this.moduloVsRoleService.update(+id, updateModuloVsRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduloVsRoleService.remove(+id);
  }
}
