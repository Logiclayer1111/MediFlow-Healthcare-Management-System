import { usePrescriptions } from '@/hooks/useClinical';
import PrescriptionList from '@/components/prescriptions/PrescriptionList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import Link from 'next/link';

export default function PrescriptionsPage() {
  const { data, isLoading, error } = usePrescriptions();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load prescriptions" />;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Prescriptions</h1>
        <Link href="/prescriptions/new" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          New Prescription
        </Link>
      </div>
      <PrescriptionList prescriptions={data || []} />
    </div>
  );
}
