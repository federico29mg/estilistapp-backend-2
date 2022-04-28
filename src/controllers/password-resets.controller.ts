import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PasswordResetsService } from '../services/password-resets.service';
import { CreatePasswordResetDto } from '../dtos/create-password-reset.dto';
import { UpdatePasswordResetDto } from '../dtos/update-password-reset.dto';

@Controller('password-resets')
export class PasswordResetsController {
  constructor(private readonly passwordResetsService: PasswordResetsService) {}

  @Post()
  create(@Body() createPasswordResetDto: CreatePasswordResetDto) {
    return this.passwordResetsService.create(createPasswordResetDto);
  }

  @Get()
  findAll() {
    return this.passwordResetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordResetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasswordResetDto: UpdatePasswordResetDto) {
    return this.passwordResetsService.update(+id, updatePasswordResetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordResetsService.remove(+id);
  }
}
