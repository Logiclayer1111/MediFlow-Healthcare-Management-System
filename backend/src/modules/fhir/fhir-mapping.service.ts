/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class FhirMappingService {
  mapPatientToFhir(patient: any): any {
    return {
      resourceType: 'Patient',
      id: patient.id,
      name: [{ given: [patient.firstName], family: patient.lastName }],
      birthDate: patient.dateOfBirth,
      telecom: [{ system: 'phone', value: patient.phone }],
      // ... more mappings
    };
  }

  mapFhirToPatient(fhirPatient: any): any {
    // Inverse mapping
    return {
      firstName: fhirPatient.name[0]?.given?.[0] || '',
      lastName: fhirPatient.name[0]?.family || '',
      dateOfBirth: fhirPatient.birthDate,
      phone: fhirPatient.telecom?.find((t: any) => t.system === 'phone')?.value,
    };
  }
}