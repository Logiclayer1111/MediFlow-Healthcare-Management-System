/* eslint-disable prettier/prettier */
import { IsOptional, IsNumber, IsEnum, IsDateString } from 'class-validator';
import { InvoiceStatus } from '../entities/invoice.entity';

export class UpdateInvoiceDto {
  @IsOptional()
  @IsNumber()
  amountPaid?: number;

  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;

  @IsOptional()
  @IsDateString()
  paidDate?: string;
}