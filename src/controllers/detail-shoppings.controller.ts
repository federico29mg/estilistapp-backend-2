import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailShoppingsService } from '../services/detail-shoppings.service';
import { CreateDetailShoppingDto } from '../dtos/create-detail-shopping.dto';
import { UpdateDetailShoppingDto } from '../dtos/update-detail-shopping.dto';

@Controller('detail-shoppings')
export class DetailShoppingsController {
  constructor(private readonly detailShoppingsService: DetailShoppingsService) {}

  @Post()
  create(@Body() createDetailShoppingDto: CreateDetailShoppingDto) {
    return this.detailShoppingsService.create(createDetailShoppingDto);
  }

  @Get()
  findAll() {
    return this.detailShoppingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailShoppingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailShoppingDto: UpdateDetailShoppingDto) {
    return this.detailShoppingsService.update(+id, updateDetailShoppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailShoppingsService.remove(+id);
  }
}
