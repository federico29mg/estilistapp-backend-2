import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalAccessTokenDto } from './create-personal-access-token.dto';

export class UpdatePersonalAccessTokenDto extends PartialType(CreatePersonalAccessTokenDto) {}
