import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalAccessTokensService } from '../services/personal-access-tokens.service';
import { CreatePersonalAccessTokenDto } from '../dtos/create-personal-access-token.dto';
import { UpdatePersonalAccessTokenDto } from '../dtos/update-personal-access-token.dto';

@Controller('personal-access-tokens')
export class PersonalAccessTokensController {
  constructor(private readonly personalAccessTokensService: PersonalAccessTokensService) {}

  @Post()
  create(@Body() createPersonalAccessTokenDto: CreatePersonalAccessTokenDto) {
    return this.personalAccessTokensService.create(createPersonalAccessTokenDto);
  }

  @Get()
  findAll() {
    return this.personalAccessTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalAccessTokensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalAccessTokenDto: UpdatePersonalAccessTokenDto) {
    return this.personalAccessTokensService.update(+id, updatePersonalAccessTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalAccessTokensService.remove(+id);
  }
}
