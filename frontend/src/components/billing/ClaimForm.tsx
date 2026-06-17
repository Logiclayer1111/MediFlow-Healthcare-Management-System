import { useState } from 'react';
import { useCreateClaim } from '@/hooks/useBilling';
import { useRouter } from 'next/router';

export default function ClaimForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    patientId: '',
    serviceDetails: { cpt: '', icd10: '', amount: 0 },
    totalAmount: 0,
  });
  const { mutate, isLoading } = useCreateClaim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => router.push('/billing'),
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
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">CPT Code</label>
        <input
          type="text"
          value={form.serviceDetails.cpt}
          onChange={(e) =>
            setForm({ ...form, serviceDetails: { ...form.serviceDetails, cpt: e.target.value } })
          }
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">ICD-10 Code</label>
        <input
          type="text"
          value={form.serviceDetails.icd10}
          onChange={(e) =>
            setForm({ ...form, serviceDetails: { ...form.serviceDetails, icd10: e.target.value } })
          }
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          step="0.01"
          value={form.serviceDetails.amount}
          onChange={(e) => {
            const val = parseFloat(e.target.value) || 0;
            setForm({
              ...form,
              serviceDetails: { ...form.serviceDetails, amount: val },
              totalAmount: val,
            });
          }}
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Submitting...' : 'Submit Claim'}
      </button>
    </form>
  );
}
