import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModuloVsRole } from 'src/models/modulo-vs-role.model';
import { CreateModuloVsRoleDto } from '../dtos/create-modulo-vs-role.dto';
import { UpdateModuloVsRoleDto } from '../dtos/update-modulo-vs-role.dto';

@Injectable()
export class ModuloVsRoleService {
  constructor(
    @InjectModel(ModuloVsRole)
    private moduloVsRoleModel: typeof ModuloVsRole
  ) {}
  
  create(createModuloVsRoleDto: CreateModuloVsRoleDto) {
    return 'This action adds a new moduloVsRole';
  }

  findAll() {
    return `This action returns all moduloVsRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moduloVsRole`;
  }

  update(id: number, updateModuloVsRoleDto: UpdateModuloVsRoleDto) {
    return `This action updates a #${id} moduloVsRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} moduloVsRole`;
  }
}
