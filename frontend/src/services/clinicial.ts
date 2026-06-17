import api from './api';

export const getEncounter = (id: string) => api.get(`/clinical/encounter/${id}`).then(res => res.data);
export const createEncounter = (data: any) => api.post('/clinical/encounter', data).then(res => res.data);
export const getPrescriptions = () => api.get('/prescriptions').then(res => res.data);
export const getReport = (start: string, end: string) =>
  api.get('/reports/clinical', { params: { start, end } }).then(res => res.data);