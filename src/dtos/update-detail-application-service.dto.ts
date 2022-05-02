import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailApplicationServiceDto } from './create-detail-application-service.dto';

export class UpdateDetailApplicationServiceDto extends PartialType(CreateDetailApplicationServiceDto) {}
