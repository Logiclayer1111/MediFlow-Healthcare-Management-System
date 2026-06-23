/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../../../shared/enums/roles.enum';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}