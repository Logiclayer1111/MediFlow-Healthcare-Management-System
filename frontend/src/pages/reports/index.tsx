import { useState } from 'react';
import { useReport } from '@/hooks/useClinical';

export default function ReportsPage() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const { data, refetch, isLoading } = useReport(start, end);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border rounded p-2"
        />
        <button onClick={() => refetch()} className="btn-primary">
          Generate
        </button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <h3>Total Patients</h3>
            <p className="text-2xl">{data?.totalPatients || 0}</p>
          </div>
          <div className="card">
            <h3>Total Encounters</h3>
            <p className="text-2xl">{data?.encounters || 0}</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p className="text-2xl">${data?.totalRevenue || 0}</p>
          </div>
        </div>
      )}
    </div>
  );
}
