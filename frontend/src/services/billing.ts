import api from './api';

export const getClaims = () => api.get('/billing/claim').then(res => res.data);
export const createClaim = (data: any) => api.post('/billing/claim', data).then(res => res.data);
export const updateInvoice = (id: string, data: any) => api.put(`/billing/invoice/${id}`, data).then(res => res.data);