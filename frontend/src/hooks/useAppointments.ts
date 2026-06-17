import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAppointments, createAppointment, updateAppointment, deleteAppointment } from '@/services/appointment';

export const useAppointments = (filters?: { doctorId?: string; patientId?: string }) => {
  return useQuery(['appointments', filters], () => getAppointments(filters));
};

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(createAppointment, {
    onSuccess: () => queryClient.invalidateQueries(['appointments']),
  });
};

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }: { id: string; data: any }) => updateAppointment(id, data), {
    onSuccess: () => queryClient.invalidateQueries(['appointments']),
  });
};

export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAppointment, {
    onSuccess: () => queryClient.invalidateQueries(['appointments']),
  });
};