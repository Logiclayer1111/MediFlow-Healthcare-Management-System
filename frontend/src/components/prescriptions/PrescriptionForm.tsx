import { useState } from 'react';
import { useCreatePrescription } from '@/hooks/useClinical';
import { useRouter } from 'next/router';

export default function PrescriptionForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    patientId: '',
    doctorId: '',
    medication: '',
    dosage: '',
    frequency: '',
    route: '',
    quantity: 0,
    refills: 0,
    instructions: '',
    datePrescribed: '',
    dateExpires: '',
  });
  const { mutate, isLoading } = useCreatePrescription();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => router.push('/prescriptions'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Patient ID</label>
          <input
            type="text"
            value={form.patientId}
            onChange={(e) => setForm({ ...form, patientId: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Doctor ID</label>
          <input
            type="text"
            value={form.doctorId}
            onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Medication</label>
        <input
          type="text"
          value={form.medication}
          onChange={(e) => setForm({ ...form, medication: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Dosage</label>
          <input
            type="text"
            value={form.dosage}
            onChange={(e) => setForm({ ...form, dosage: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Frequency</label>
          <input
            type="text"
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Route</label>
          <input
            type="text"
            value={form.route}
            onChange={(e) => setForm({ ...form, route: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 0 })}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Refills</label>
          <input
            type="number"
            value={form.refills}
            onChange={(e) => setForm({ ...form, refills: parseInt(e.target.value) || 0 })}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Instructions</label>
        <textarea
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          rows={2}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Date Prescribed</label>
          <input
            type="date"
            value={form.datePrescribed}
            onChange={(e) => setForm({ ...form, datePrescribed: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date Expires</label>
          <input
            type="date"
            value={form.dateExpires}
            onChange={(e) => setForm({ ...form, dateExpires: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Saving...' : 'Create Prescription'}
      </button>
    </form>
  );
}
