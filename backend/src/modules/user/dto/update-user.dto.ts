/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../../../shared/enums/roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsString()
  phone?: string;
}