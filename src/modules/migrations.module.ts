import { Module } from '@nestjs/common';
import { MigrationsService } from '../services/migrations.service';
import { MigrationsController } from '../controllers/migrations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Migration } from 'src/models/migration.model';

@Module({
  imports: [SequelizeModule.forFeature([Migration])],
  controllers: [MigrationsController],
  providers: [MigrationsService]
})
export class MigrationsModule {}
