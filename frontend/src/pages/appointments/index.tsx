import { useAppointments } from '@/hooks/useAppointments';
import AppointmentCalendar from '@/components/appointments/AppointmentCalendar';
import AppointmentList from '@/components/appointments/AppointmentList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import Link from 'next/link';

export default function AppointmentsPage() {
  const { data: appointments, isLoading, error } = useAppointments();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load appointments" />;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Appointments</h1>
        <Link href="/appointments/new" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          New Appointment
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AppointmentCalendar />
        </div>
        <div className="lg:col-span-2">
          <AppointmentList appointments={appointments || []} />
        </div>
      </div>
    </div>
  );
}
