import { useState } from 'react';
import { useCreateAppointment } from '@/hooks/useAppointments';
import { useRouter } from 'next/router';

export default function AppointmentForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    patientId: '',
    doctorId: '',
    startTime: '',
    endTime: '',
    notes: '',
  });
  const { mutate, isLoading } = useCreateAppointment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => router.push('/appointments'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm font-medium">Patient ID</label>
        <input
          type="text"
          value={form.patientId}
          onChange={(e) => setForm({ ...form, patientId: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Doctor ID</label>
        <input
          type="text"
          value={form.doctorId}
          onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Start Time</label>
        <input
          type="datetime-local"
          value={form.startTime}
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Time</label>
        <input
          type="datetime-local"
          value={form.endTime}
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          rows={3}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Saving...' : 'Create Appointment'}
      </button>
    </form>
  );
}
