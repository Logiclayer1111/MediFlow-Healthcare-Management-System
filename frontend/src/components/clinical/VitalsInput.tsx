import { useState } from 'react';

export default function VitalsInput({ onSave }: { onSave: (vitals: any) => void }) {
  const [vitals, setVitals] = useState({ bp: '', hr: '', temp: '', rr: '', oxygen: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(vitals);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="BP (120/80)"
          value={vitals.bp}
          onChange={(e) => setVitals({ ...vitals, bp: e.target.value })}
          className="border rounded p-1 text-sm"
        />
        <input
          type="text"
          placeholder="HR (bpm)"
          value={vitals.hr}
          onChange={(e) => setVitals({ ...vitals, hr: e.target.value })}
          className="border rounded p-1 text-sm"
        />
        <input
          type="text"
          placeholder="Temp (°F)"
          value={vitals.temp}
          onChange={(e) => setVitals({ ...vitals, temp: e.target.value })}
          className="border rounded p-1 text-sm"
        />
        <input
          type="text"
          placeholder="RR (breaths/min)"
          value={vitals.rr}
          onChange={(e) => setVitals({ ...vitals, rr: e.target.value })}
          className="border rounded p-1 text-sm"
        />
        <input
          type="text"
          placeholder="O2 Sat (%)"
          value={vitals.oxygen}
          onChange={(e) => setVitals({ ...vitals, oxygen: e.target.value })}
          className="border rounded p-1 text-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700"
      >
        Save Vitals
      </button>
    </form>
  );
}
