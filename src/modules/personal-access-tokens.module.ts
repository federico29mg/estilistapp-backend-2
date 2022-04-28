import { Module } from '@nestjs/common';
import { PersonalAccessTokensService } from '../services/personal-access-tokens.service';
import { PersonalAccessTokensController } from '../controllers/personal-access-tokens.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonalAccessToken } from 'src/models/personal-access-token.model';

@Module({
  imports: [SequelizeModule.forFeature([PersonalAccessToken])],
  controllers: [PersonalAccessTokensController],
  providers: [PersonalAccessTokensService]
})
export class PersonalAccessTokensModule {}
