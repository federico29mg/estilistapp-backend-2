import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '../models/category.model';
import { CategoriesModule } from './categories.module';
import { FailedJob } from 'src/models/failed-job.model';
import { FailedJobsModule } from './failed-jobs.module';
import { Migration } from 'src/models/migration.model';
import { MigrationsModule } from './migrations.module';
import { Modulo } from 'src/models/modulo.model';
import { ModulosModule } from './modulos.module';
import { Provider } from 'src/models/provider.model';
import { ProvidersModule } from './providers.module';
import { PasswordReset } from 'src/models/password-reset.model';
import { PasswordResetsModule } from './password-resets.module';
import { PersonalAccessToken } from 'src/models/personal-access-token.model';
import { PersonalAccessTokensModule } from './personal-access-tokens.module';
import { Role } from 'src/models/role.model';
import { RolesModule } from './roles.module';
import { ServiceStatus } from 'src/models/service-status.model';
import { ServiceStatusModule } from './service-status.module';
import { Application } from 'src/models/application.model';
import { ApplicationsModule } from './applications.module';
import { User } from 'src/models/user.model';
import { UsersModule } from './users.module';
import { Inventory } from 'src/models/inventory.model';
import { InventoriesModule } from './inventories.module';
import { Calendar } from 'src/models/calendar.model';
import { CalendarsModule } from './calendars.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'estilistapp',
    models: [
      Category,
      FailedJob,
      Migration,
      Modulo,
      Provider,
      PasswordReset,
      PersonalAccessToken,
      Role,
      ServiceStatus,
      User,
      Application,
      Inventory,
      Calendar],
    autoLoadModels: true,
    synchronize: true,
  }),
    CategoriesModule,
    FailedJobsModule,
    MigrationsModule,
    ModulosModule,
    ProvidersModule,
    PasswordResetsModule,
    PersonalAccessTokensModule,
    RolesModule,
    ServiceStatusModule,
    UsersModule,
    ApplicationsModule,
    InventoriesModule,
    CalendarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
