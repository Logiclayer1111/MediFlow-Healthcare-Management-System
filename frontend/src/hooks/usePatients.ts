import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getPatients, getPatient, createPatient, updatePatient, deletePatient } from '@/services/patient';

// Hook to fetch paginated patient list
export const usePatients = (page = 1, limit = 10) => {
  return useQuery(
    ['patients', page, limit],
    () => getPatients({ page, limit }),
    {
      keepPreviousData: true,
      staleTime: 60000, // 1 minute
    }
  );
};

// Hook to fetch a single patient by ID
export const usePatient = (id: string) => {
  return useQuery(
    ['patient', id],
    () => getPatient(id),
    {
      enabled: !!id, // only run if id exists
      staleTime: 300000, // 5 minutes
    }
  );
};

// Hook to create a new patient
export const useCreatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(createPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['patients']);
    },
  });
};

// Hook to update a patient
export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, data }: { id: string; data: any }) => updatePatient(id, data),
    {
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries(['patients']);
        queryClient.invalidateQueries(['patient', id]);
      },
    }
  );
};

// Hook to delete a patient
export const useDeletePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['patients']);
    },
  });
};