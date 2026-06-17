import { useQuery, useMutation } from 'react-query';
import { getClaims, createClaim, updateInvoice } from '@/services/billing';

export const useClaims = () => useQuery('claims', getClaims);
export const useCreateClaim = () => useMutation(createClaim);
export const useUpdateInvoice = () => useMutation(({ id, data }: { id: string; data: any }) => updateInvoice(id, data));