import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Modulo } from 'src/models/modulo.model';
import { CreateModuloDto } from '../dtos/create-modulo.dto';
import { UpdateModuloDto } from '../dtos/update-modulo.dto';

@Injectable()
export class ModulosService {
  constructor(
    @InjectModel(Modulo)
    private moduloModel: typeof Modulo
  ) {}

  create(createModuloDto: CreateModuloDto) {
    return 'This action adds a new modulo';
  }

  findAll() {
    return `This action returns all modulos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulo`;
  }

  update(id: number, updateModuloDto: UpdateModuloDto) {
    return `This action updates a #${id} modulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulo`;
  }
}
