/* eslint-disable prettier/prettier */
import { IsUUID, IsNumber, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { InvoiceStatus } from '../entities/invoice.entity';

export class CreateInvoiceDto {
  @IsUUID()
  claimId!: string;

  @IsNumber()
  amountDue!: number;

  @IsOptional()
  @IsNumber()
  amountPaid?: number;

  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;

  @IsDateString()
  dueDate!: string;
}