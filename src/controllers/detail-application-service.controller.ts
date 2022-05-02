import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailApplicationServiceService } from '../services/detail-application-service.service';
import { CreateDetailApplicationServiceDto } from '../dtos/create-detail-application-service.dto';
import { UpdateDetailApplicationServiceDto } from '../dtos/update-detail-application-service.dto';

@Controller('detail-application-service')
export class DetailApplicationServiceController {
  constructor(private readonly detailApplicationServiceService: DetailApplicationServiceService) {}

  @Post()
  create(@Body() createDetailApplicationServiceDto: CreateDetailApplicationServiceDto) {
    return this.detailApplicationServiceService.create(createDetailApplicationServiceDto);
  }

  @Get()
  findAll() {
    return this.detailApplicationServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailApplicationServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailApplicationServiceDto: UpdateDetailApplicationServiceDto) {
    return this.detailApplicationServiceService.update(+id, updateDetailApplicationServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailApplicationServiceService.remove(+id);
  }
}
