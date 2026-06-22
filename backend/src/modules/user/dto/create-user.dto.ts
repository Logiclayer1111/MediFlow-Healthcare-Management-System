/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsEnum, MinLength, IsOptional } from 'class-validator';
import { UserRole } from '../../../shared/enums/roles.enum';

export class CreateUserDto {
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

  @IsOptional()
  @IsString()
  phone?: string;
}