import { useRouter } from 'next/router';
import { useEncounter } from '@/hooks/useClinical';

export default function EncounterDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: encounter, isLoading } = useEncounter(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (!encounter) return <div>Encounter not found</div>;

  return (
    <div className="card">
      <h1 className="text-2xl font-bold">Encounter</h1>
      <p>
        <strong>Patient:</strong> {encounter.patient?.firstName} {encounter.patient?.lastName}
      </p>
      <p>
        <strong>Doctor:</strong> {encounter.doctor?.firstName} {encounter.doctor?.lastName}
      </p>
      <p>
        <strong>Date:</strong> {new Date(encounter.date).toLocaleString()}
      </p>
      <p>
        <strong>Chief Complaint:</strong> {encounter.chiefComplaint}
      </p>
      <p>
        <strong>Diagnosis:</strong> {encounter.diagnosis}
      </p>
      <div className="mt-4">
        <h3 className="font-semibold">Vitals</h3>
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(encounter.vitals, null, 2)}</pre>
      </div>
    </div>
  );
}
