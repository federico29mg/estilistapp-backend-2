import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceStatusService } from '../services/service-status.service';
import { CreateServiceStatusDto } from '../dtos/create-service-status.dto';
import { UpdateServiceStatusDto } from '../dtos/update-service-status.dto';

@Controller('service-status')
export class ServiceStatusController {
  constructor(private readonly serviceStatusService: ServiceStatusService) {}

  @Post()
  create(@Body() createServiceStatusDto: CreateServiceStatusDto) {
    return this.serviceStatusService.create(createServiceStatusDto);
  }

  @Get()
  findAll() {
    return this.serviceStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceStatusDto: UpdateServiceStatusDto) {
    return this.serviceStatusService.update(+id, updateServiceStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceStatusService.remove(+id);
  }
}
