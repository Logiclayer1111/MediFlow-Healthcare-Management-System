import api from './api';

export const getPatients = (params: { page: number; limit: number }) =>
  api.get('/patients', { params });

export const getPatient = (id: string) =>
  api.get(`/patients/${id}`);

export const createPatient = (data: any) =>
  api.post('/patients', data);

export const updatePatient = (id: string, data: any) =>
  api.put(`/patients/${id}`, data);

export const deletePatient = (id: string) =>
  api.delete(`/patients/${id}`);