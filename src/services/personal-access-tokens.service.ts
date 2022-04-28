import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PersonalAccessToken } from 'src/models/personal-access-token.model';
import { CreatePersonalAccessTokenDto } from '../dtos/create-personal-access-token.dto';
import { UpdatePersonalAccessTokenDto } from '../dtos/update-personal-access-token.dto';

@Injectable()
export class PersonalAccessTokensService {
  constructor(
    @InjectModel(PersonalAccessToken)
    private personalAccessTokenModel: typeof PersonalAccessToken
  ) {}
  
  create(createPersonalAccessTokenDto: CreatePersonalAccessTokenDto) {
    return 'This action adds a new personalAccessToken';
  }

  findAll() {
    return `This action returns all personalAccessTokens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalAccessToken`;
  }

  update(id: number, updatePersonalAccessTokenDto: UpdatePersonalAccessTokenDto) {
    return `This action updates a #${id} personalAccessToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalAccessToken`;
  }
}
