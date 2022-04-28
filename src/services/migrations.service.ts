import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Migration } from 'src/models/migration.model';
import { CreateMigrationDto } from '../dtos/create-migration.dto';
import { UpdateMigrationDto } from '../dtos/update-migration.dto';

@Injectable()
export class MigrationsService {
  constructor(
    @InjectModel(Migration)
    private migrationModel: typeof Migration
  ) {}
  
  create(createMigrationDto: CreateMigrationDto) {
    return 'This action adds a new migration';
  }

  findAll() {
    return `This action returns all migrations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} migration`;
  }

  update(id: number, updateMigrationDto: UpdateMigrationDto) {
    return `This action updates a #${id} migration`;
  }

  remove(id: number) {
    return `This action removes a #${id} migration`;
  }
}
