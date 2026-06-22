/* eslint-disable prettier/prettier */
import { IsOptional, IsEnum, IsNumber, IsObject, IsDateString, IsString } from 'class-validator';
import { ClaimStatus } from '../entities/claim.entity';

export class UpdateClaimDto {
  @IsOptional()
  @IsObject()
  serviceDetails?: any;

  @IsOptional()
  @IsNumber()
  totalAmount?: number;

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