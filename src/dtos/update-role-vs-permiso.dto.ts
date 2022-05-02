import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleVsPermisoDto } from './create-role-vs-permiso.dto';

export class UpdateRoleVsPermisoDto extends PartialType(CreateRoleVsPermisoDto) {}
