/* eslint-disable prettier/prettier */
import { IsString, IsObject } from 'class-validator';

export class DiagnoseRequestDto {
  @IsObject()
  patientData: any;
}

export class SummarizeRequestDto {
  @IsString()
  text!: string;
}
