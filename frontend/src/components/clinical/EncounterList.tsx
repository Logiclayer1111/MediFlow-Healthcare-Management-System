import { Encounter } from '@/types/clinical';
import Link from 'next/link';
import { format } from 'date-fns';

export default function EncounterList({ encounters }: { encounters: Encounter[] }) {
  if (!encounters.length) return <p className="text-gray-500">No encounters found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Patient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Diagnosis
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {encounters.map((enc) => (
            <tr key={enc.id}>
              <td className="px-6 py-4 whitespace-nowrap">{format(new Date(enc.date), 'PPp')}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {enc.patient?.firstName} {enc.patient?.lastName}
              </td>
              <td className="px-6 py-4">{enc.diagnosis || '—'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/clinical/encounters/${enc.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
