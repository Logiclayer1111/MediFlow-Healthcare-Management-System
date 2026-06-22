/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsObject } from 'class-validator';

export class UpdateObservationDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @IsObject()
  value?: any;

  @IsOptional()
  @IsString()
  unit?: string;
}