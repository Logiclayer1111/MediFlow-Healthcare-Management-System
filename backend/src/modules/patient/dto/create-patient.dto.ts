/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  profile?: any; // nested profile object
}
