import { Prescription } from '@/types/prescription';
import { format } from 'date-fns';

export default function PrescriptionList({ prescriptions }: { prescriptions: Prescription[] }) {
  if (!prescriptions.length) return <p className="text-gray-500">No prescriptions found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {prescriptions.map((rx) => (
        <div key={rx.id} className="card">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{rx.medication}</h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
                rx.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : rx.status === 'discontinued'
                    ? 'bg-red-100 text-red-800'
                    : rx.status === 'expired'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-100 text-blue-800'
              }`}
            >
              {rx.status}
            </span>
          </div>
          <p className="text-sm text-gray-600">Dosage: {rx.dosage}</p>
          <p className="text-sm text-gray-600">Frequency: {rx.frequency}</p>
          <p className="text-sm text-gray-600">Refills: {rx.refills}</p>
          <p className="text-sm text-gray-500 mt-2">
            Prescribed: {format(new Date(rx.datePrescribed), 'PP')}
          </p>
          {rx.dateExpires && (
            <p className="text-sm text-gray-500">
              Expires: {format(new Date(rx.dateExpires), 'PP')}
            </p>
          )}
          <p className="text-sm text-gray-600 mt-2">Patient ID: {rx.patientId}</p>
        </div>
      ))}
    </div>
  );
}
