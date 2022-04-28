import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FailedJobsService } from '../services/failed-jobs.service';
import { CreateFailedJobDto } from '../dtos/create-failed-job.dto';
import { UpdateFailedJobDto } from '../dtos/update-failed-job.dto';

@Controller('failed-jobs')
export class FailedJobsController {
  constructor(private readonly failedJobsService: FailedJobsService) {}

  @Post()
  create(@Body() createFailedJobDto: CreateFailedJobDto) {
    return this.failedJobsService.create(createFailedJobDto);
  }

  @Get()
  findAll() {
    return this.failedJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.failedJobsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFailedJobDto: UpdateFailedJobDto) {
    return this.failedJobsService.update(+id, updateFailedJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.failedJobsService.remove(+id);
  }
}
