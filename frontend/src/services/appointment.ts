import api from './api';

export const getAppointments = (params?: { doctorId?: string; patientId?: string }) =>
  api.get('/appointments', { params });

export const createAppointment = (data: any) =>
  api.post('/appointments', data);

export const updateAppointment = (id: string, data: any) =>
  api.put(`/appointments/${id}`, data);

export const deleteAppointment = (id: string) =>
  api.delete(`/appointments/${id}`);