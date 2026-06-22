/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { PrescriptionStatus } from '../entities/prescription.entity';

export class UpdatePrescriptionDto {
  @IsOptional()
  @IsString()
  medication?: string;

  @IsOptional()
  @IsString()
  dosage?: string;

  @IsOptional()
  @IsString()
  frequency?: string;

  @IsOptional()
  @IsString()
  route?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  refills?: number;

  @IsOptional()
  @IsString()
  instructions?: string;

  @IsOptional()
  @IsDateString()
  dateExpires?: string;

  @IsOptional()
  @IsEnum(PrescriptionStatus)
  status?: PrescriptionStatus;
}