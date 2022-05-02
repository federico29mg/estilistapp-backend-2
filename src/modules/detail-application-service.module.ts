import { Module } from '@nestjs/common';
import { DetailApplicationServiceService } from '../services/detail-application-service.service';
import { DetailApplicationServiceController } from '../controllers/detail-application-service.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DetailApplicationService } from 'src/models/detail-application-service.model';

@Module({
  imports: [SequelizeModule.forFeature([DetailApplicationService])],
  controllers: [DetailApplicationServiceController],
  providers: [DetailApplicationServiceService]
})
export class DetailApplicationServiceModule {}
