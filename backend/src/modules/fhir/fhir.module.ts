/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FhirController } from './fhir.controller';
import { FhirService } from './fhir.service';
import { FhirMappingService } from './fhir-mapping.service';

@Module({
  controllers: [FhirController],
  providers: [FhirService, FhirMappingService],
  exports: [FhirService],
})
export class FhirModule {}