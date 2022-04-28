import { PartialType } from '@nestjs/mapped-types';
import { CreateFailedJobDto } from './create-failed-job.dto';

export class UpdateFailedJobDto extends PartialType(CreateFailedJobDto) {}
