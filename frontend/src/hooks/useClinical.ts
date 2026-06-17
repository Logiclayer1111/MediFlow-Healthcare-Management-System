import { useQuery, useMutation } from 'react-query';
import { getEncounter, createEncounter, getPrescriptions, getReport, createPrescription } from '@/services/clinicial';


export const useEncounter = (id: string) => {
  return useQuery(['encounter', id], () => getEncounter(id), { enabled: !!id });
};

export const useCreateEncounter = () => {
  return useMutation(createEncounter);
};

export const usePrescriptions = () => {
  return useQuery('prescriptions', getPrescriptions);
};

export const useReport = (start: string, end: string) => {
  return useQuery(['report', start, end], () => getReport(start, end), { enabled: !!start && !!end });
};

export const useCreatePrescription = () => {
  return useMutation(createPrescription);
};