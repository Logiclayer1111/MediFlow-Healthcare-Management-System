/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { FhirService } from './fhir.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('fhir')
@UseGuards(JwtAuthGuard)
export class FhirController {
  constructor(private fhirService: FhirService) {}

  @Get('Patient/:id')
  getPatient(@Param('id') id: string) {
    return this.fhirService.getPatient(id);
  }

  @Post('Patient')
  createPatient(@Body() fhirResource: any) {
    return this.fhirService.createPatient(fhirResource);
  }

  @Get('Observation')
  searchObservation(@Param('patientId') patientId?: string) {
    return this.fhirService.searchObservation(patientId);
  }

  @Post('$process-ccda')
  processCCDA(@Body() ccdaData: any) {
    return this.fhirService.processCCDA(ccdaData);
  }
}