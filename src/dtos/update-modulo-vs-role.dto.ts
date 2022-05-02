import { PartialType } from '@nestjs/mapped-types';
import { CreateModuloVsRoleDto } from './create-modulo-vs-role.dto';

export class UpdateModuloVsRoleDto extends PartialType(CreateModuloVsRoleDto) {}
