import api from './api';

export const getFhirPatient = (id: string) => api.get(`/fhir/Patient/${id}`).then(res => res.data);
export const createFhirPatient = (data: any) => api.post('/fhir/Patient', data).then(res => res.data);
export const processCCDA = (data: any) => api.post('/fhir/$process-ccda', data).then(res => res.data);