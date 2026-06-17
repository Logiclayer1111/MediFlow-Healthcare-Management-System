import { Patient } from '@/types/patient';

export default function PatientDetail({ patient }: { patient: Patient }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">
            {patient.firstName} {patient.lastName}
          </h2>
          <p className="text-gray-600">{patient.email}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-500">Phone</label>
          <p>{patient.phone || '—'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Date of Birth</label>
          <p>{patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : '—'}</p>
        </div>
        <div className="col-span-2">
          <label className="text-sm text-gray-500">Insurance</label>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(patient.profile?.insurance || {}, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
