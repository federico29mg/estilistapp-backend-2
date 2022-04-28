import { Module } from '@nestjs/common';
import { PasswordResetsService } from '../services/password-resets.service';
import { PasswordResetsController } from '../controllers/password-resets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PasswordReset } from 'src/models/password-reset.model';

@Module({
  imports: [SequelizeModule.forFeature([PasswordReset])],
  controllers: [PasswordResetsController],
  providers: [PasswordResetsService]
})
export class PasswordResetsModule {}
