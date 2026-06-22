/* eslint-disable prettier/prettier */
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class ReportQueryDto {
  @IsDateString()
  start!: string;

  @IsDateString()
  end!: string;

  @IsOptional()
  @IsString()
  clinicId?: string;
}