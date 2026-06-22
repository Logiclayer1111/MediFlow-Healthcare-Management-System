/* eslint-disable prettier/prettier */
import { IsUUID, IsString, IsObject, IsOptional } from 'class-validator';

export class CreateObservationDto {
  @IsUUID()
  encounterId!: string;

  @IsString()
  code!: string;

  @IsString()
  display!: string;

  @IsObject()
  value: any;

  @IsOptional()
  @IsString()
  unit?: string;
}