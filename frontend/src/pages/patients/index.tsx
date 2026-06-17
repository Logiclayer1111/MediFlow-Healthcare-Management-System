import { useState } from 'react';
import Link from 'next/link';
import { usePatients } from '@/hooks/usePatients';
import PatientList from '@/components/patients/PatientList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';

export default function PatientsPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = usePatients(page, limit);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load patients. Please try again." />;

  const patients = data?.data?.items || [];
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
        <Link
          href="/patients/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Patient
        </Link>
      </div>

      <PatientList patients={patients} />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages} ({total} patients)
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
