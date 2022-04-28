import { Module } from '@nestjs/common';
import { ProvidersService } from '../services/providers.service';
import { ProvidersController } from '../controllers/providers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Provider } from 'src/models/provider.model';

@Module({
  imports: [SequelizeModule.forFeature([Provider])],
  controllers: [ProvidersController],
  providers: [ProvidersService]
})
export class ProvidersModule {}
