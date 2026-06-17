import { Patient } from '@/types/patient';
import Link from 'next/link';

export default function PatientList({ patients }: { patients: Patient[] }) {
  if (!patients.length) return <p>No patients found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/patients/${patient.id}`} className="text-blue-600 hover:underline">
                  {patient.firstName} {patient.lastName}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.phone || '—'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/patients/${patient.id}/edit`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
