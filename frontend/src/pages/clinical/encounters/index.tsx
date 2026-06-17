import { useQuery } from 'react-query';
import api from '@/services/api';
import EncounterList from '@/components/clinical/EncounterList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import Link from 'next/link';

const fetchEncounters = () => api.get('/clinical/encounter').then((res) => res.data);

export default function EncountersPage() {
  const { data, isLoading, error } = useQuery('encounters', fetchEncounters);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load encounters" />;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Clinical Encounters</h1>
        <Link
          href="/clinical/encounters/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          New Encounter
        </Link>
      </div>
      <EncounterList encounters={data || []} />
    </div>
  );
}
