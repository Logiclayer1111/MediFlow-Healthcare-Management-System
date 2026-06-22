/* eslint-disable prettier/prettier */
import { IsUUID, IsString, IsNumber, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { PrescriptionStatus } from '../entities/prescription.entity';

export class CreatePrescriptionDto {
  @IsUUID()
  patientId!: string;

  @IsUUID()
  doctorId!: string;

  @IsString()
  medication!: string;

  @IsString()
  dosage!: string;

  @IsString()
  frequency!: string;

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

  @IsDateString()
  datePrescribed!: string;

  @IsOptional()
  @IsDateString()
  dateExpires?: string;

  @IsOptional()
  @IsEnum(PrescriptionStatus)
  status?: PrescriptionStatus;
}