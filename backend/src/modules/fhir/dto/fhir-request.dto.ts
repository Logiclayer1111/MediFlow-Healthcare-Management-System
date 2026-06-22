/* eslint-disable prettier/prettier */
export class FhirPatientRequest {
  resourceType!: 'Patient';
  id?: string;
  name!: { given: string[]; family: string }[];
  birthDate?: string;
  telecom?: { system: string; value: string }[];
  // ... other FHIR fields
}