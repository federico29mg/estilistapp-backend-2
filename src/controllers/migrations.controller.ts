import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MigrationsService } from '../services/migrations.service';
import { CreateMigrationDto } from '../dtos/create-migration.dto';
import { UpdateMigrationDto } from '../dtos/update-migration.dto';

@Controller('migrations')
export class MigrationsController {
  constructor(private readonly migrationsService: MigrationsService) {}

  @Post()
  create(@Body() createMigrationDto: CreateMigrationDto) {
    return this.migrationsService.create(createMigrationDto);
  }

  @Get()
  findAll() {
    return this.migrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.migrationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMigrationDto: UpdateMigrationDto) {
    return this.migrationsService.update(+id, updateMigrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.migrationsService.remove(+id);
  }
}
