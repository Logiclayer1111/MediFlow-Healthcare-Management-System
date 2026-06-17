import { useRouter } from 'next/router';
import { usePatient } from '@/hooks/usePatients';

export default function PatientDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: response, isLoading } = usePatient(id as string);

  const patient = response?.data || response; // handle both Axios response and raw data

  if (isLoading) return <div>Loading...</div>;
  if (!patient) return <div>Patient not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        {patient.firstName} {patient.lastName}
      </h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <strong>Email:</strong> {patient.email}
        </div>
        <div>
          <strong>Phone:</strong> {patient.phone}
        </div>
        <div>
          <strong>Date of Birth:</strong> {patient.dateOfBirth}
        </div>
      </div>
      {/* More patient details */}
    </div>
  );
}
