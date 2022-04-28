import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Calendar } from 'src/models/calendar.model';
import { CreateCalendarDto } from '../dtos/create-calendar.dto';
import { UpdateCalendarDto } from '../dtos/update-calendar.dto';

@Injectable()
export class CalendarsService {
  constructor(
    @InjectModel(Calendar)
    private calendarModel: typeof Calendar
  ) {}

  create(createCalendarDto: CreateCalendarDto) {
    return 'This action adds a new calendar';
  }

  findAll() {
    return `This action returns all calendars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendar`;
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendar`;
  }
}
