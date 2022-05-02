import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingsService } from '../services/shoppings.service';
import { CreateShoppingDto } from '../dtos/create-shopping.dto';
import { UpdateShoppingDto } from '../dtos/update-shopping.dto';

@Controller('shoppings')
export class ShoppingsController {
  constructor(private readonly shoppingsService: ShoppingsService) {}

  @Post()
  create(@Body() createShoppingDto: CreateShoppingDto) {
    return this.shoppingsService.create(createShoppingDto);
  }

  @Get()
  findAll() {
    return this.shoppingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingDto: UpdateShoppingDto) {
    return this.shoppingsService.update(+id, updateShoppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingsService.remove(+id);
  }
}
