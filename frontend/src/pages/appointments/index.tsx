import AppointmentCalendar from '@/components/appointments/AppointmentCalendar';

export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Appointments</h1>
      <AppointmentCalendar />
    </div>
  );
}
