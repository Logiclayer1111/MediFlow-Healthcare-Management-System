import { useState } from 'react';
import { useCreateEncounter } from '@/hooks/useClinical';
import { useRouter } from 'next/router';

export default function EncounterForm({
  patientId,
  doctorId,
}: {
  patientId?: string;
  doctorId?: string;
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    patientId: patientId || '',
    doctorId: doctorId || '',
    date: '',
    chiefComplaint: '',
    history: '',
    physicalExam: '',
    diagnosis: '',
    plan: '',
    vitals: { bp: '', hr: '', temp: '', rr: '', oxygen: '' },
  });
  const { mutate, isLoading } = useCreateEncounter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form as any, {
      onSuccess: () => router.push('/clinical/encounters'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
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
        <label className="block text-sm font-medium">Date & Time</label>
        <input
          type="datetime-local"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Chief Complaint</label>
        <textarea
          value={form.chiefComplaint}
          onChange={(e) => setForm({ ...form, chiefComplaint: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          rows={2}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">History</label>
        <textarea
          value={form.history}
          onChange={(e) => setForm({ ...form, history: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Physical Exam</label>
        <textarea
          value={form.physicalExam}
          onChange={(e) => setForm({ ...form, physicalExam: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Diagnosis</label>
        <input
          type="text"
          value={form.diagnosis}
          onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Plan</label>
        <textarea
          value={form.plan}
          onChange={(e) => setForm({ ...form, plan: e.target.value })}
          className="mt-1 block w-full border rounded-md p-2"
          rows={2}
        />
      </div>
      <fieldset className="border p-4 rounded-md">
        <legend className="text-sm font-medium">Vitals</legend>
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div>
            <label className="block text-xs">BP (systolic/diastolic)</label>
            <input
              type="text"
              value={form.vitals.bp}
              onChange={(e) => setForm({ ...form, vitals: { ...form.vitals, bp: e.target.value } })}
              className="mt-1 block w-full border rounded p-1 text-sm"
              placeholder="120/80"
            />
          </div>
          <div>
            <label className="block text-xs">HR (bpm)</label>
            <input
              type="text"
              value={form.vitals.hr}
              onChange={(e) => setForm({ ...form, vitals: { ...form.vitals, hr: e.target.value } })}
              className="mt-1 block w-full border rounded p-1 text-sm"
              placeholder="72"
            />
          </div>
          <div>
            <label className="block text-xs">Temp (°F)</label>
            <input
              type="text"
              value={form.vitals.temp}
              onChange={(e) =>
                setForm({ ...form, vitals: { ...form.vitals, temp: e.target.value } })
              }
              className="mt-1 block w-full border rounded p-1 text-sm"
              placeholder="98.6"
            />
          </div>
          <div>
            <label className="block text-xs">RR (breaths/min)</label>
            <input
              type="text"
              value={form.vitals.rr}
              onChange={(e) => setForm({ ...form, vitals: { ...form.vitals, rr: e.target.value } })}
              className="mt-1 block w-full border rounded p-1 text-sm"
              placeholder="16"
            />
          </div>
          <div>
            <label className="block text-xs">O2 Sat (%)</label>
            <input
              type="text"
              value={form.vitals.oxygen}
              onChange={(e) =>
                setForm({ ...form, vitals: { ...form.vitals, oxygen: e.target.value } })
              }
              className="mt-1 block w-full border rounded p-1 text-sm"
              placeholder="98"
            />
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Saving...' : 'Create Encounter'}
      </button>
    </form>
  );
}
