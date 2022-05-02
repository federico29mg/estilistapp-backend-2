import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailShoppingDto } from './create-detail-shopping.dto';

export class UpdateDetailShoppingDto extends PartialType(CreateDetailShoppingDto) {}
