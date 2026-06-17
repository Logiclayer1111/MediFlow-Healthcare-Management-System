import { Appointment } from '@/types/appointment';
import { format } from 'date-fns';

export default function AppointmentList({ appointments }: { appointments: Appointment[] }) {
  if (!appointments.length) return <p className="text-gray-500">No appointments found.</p>;

  return (
    <ul className="divide-y divide-gray-200">
      {appointments.map((appt) => (
        <li key={appt.id} className="py-4 flex justify-between items-start">
          <div>
            <p className="font-medium">
              {appt.patient?.firstName} {appt.patient?.lastName}
            </p>
            <p className="text-sm text-gray-500">
              {format(new Date(appt.startTime), 'PPp')} – {format(new Date(appt.endTime), 'p')}
            </p>
            <p className="text-sm">
              Doctor: {appt.doctor?.firstName} {appt.doctor?.lastName}
            </p>
          </div>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
              appt.status === 'scheduled'
                ? 'bg-blue-100 text-blue-800'
                : appt.status === 'confirmed'
                  ? 'bg-green-100 text-green-800'
                  : appt.status === 'completed'
                    ? 'bg-gray-100 text-gray-800'
                    : appt.status === 'cancelled'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {appt.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
