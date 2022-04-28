import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PasswordReset } from 'src/models/password-reset.model';
import { CreatePasswordResetDto } from '../dtos/create-password-reset.dto';
import { UpdatePasswordResetDto } from '../dtos/update-password-reset.dto';

@Injectable()
export class PasswordResetsService {
  constructor(
    @InjectModel(PasswordReset)
    private passwordResetModel: typeof PasswordReset
  ) {}
  
  create(createPasswordResetDto: CreatePasswordResetDto) {
    return 'This action adds a new passwordReset';
  }

  findAll() {
    return `This action returns all passwordResets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passwordReset`;
  }

  update(id: number, updatePasswordResetDto: UpdatePasswordResetDto) {
    return `This action updates a #${id} passwordReset`;
  }

  remove(id: number) {
    return `This action removes a #${id} passwordReset`;
  }
}
