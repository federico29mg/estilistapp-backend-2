import { Module } from '@nestjs/common';
import { CalendarsService } from '../services/calendars.service';
import { CalendarsController } from '../controllers/calendars.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Calendar } from 'src/models/calendar.model';

@Module({
  imports: [SequelizeModule.forFeature([Calendar])],
  controllers: [CalendarsController],
  providers: [CalendarsService]
})
export class CalendarsModule {}
