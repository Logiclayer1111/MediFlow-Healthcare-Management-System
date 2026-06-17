import api from './api';

export const getClinicalReport = (start: string, end: string) =>
  api.get('/reports/clinical', { params: { start, end } }).then(res => res.data);

export const getFinancialReport = (start: string, end: string) =>
  api.get('/reports/financial', { params: { start, end } }).then(res => res.data);

export const getAppointmentReport = (start: string, end: string) =>
  api.get('/reports/appointments', { params: { start, end } }).then(res => res.data);