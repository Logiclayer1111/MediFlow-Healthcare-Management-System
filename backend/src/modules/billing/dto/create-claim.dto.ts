/* eslint-disable prettier/prettier */
import { IsUUID, IsNumber, IsObject, IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { ClaimStatus } from '../entities/claim.entity';

export class CreateClaimDto {
  @IsUUID()
  patientId!: string;

  @IsObject()
  serviceDetails: any;

  @IsNumber()
  totalAmount!: number;

  @IsOptional()
  @IsEnum(ClaimStatus)
  status?: ClaimStatus;

  @IsOptional()
  @IsDateString()
  submissionDate?: string;

  @IsOptional()
  @IsString()
  insurerId?: string;
}