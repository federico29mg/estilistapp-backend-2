import { Module } from '@nestjs/common';
import { ApplicationsService } from '../services/applications.service';
import { ApplicationsController } from '../controllers/applications.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Application } from 'src/models/application.model';

@Module({
  imports: [SequelizeModule.forFeature([Application])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {}
