import { Claim } from '@/types/billing';

export default function ClaimList({ claims }: { claims: Claim[] }) {
  if (!claims.length) return <p className="text-gray-500">No claims found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Claim ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Patient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                {claim.id.slice(0, 8)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span>{claim.patientId}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${claim.totalAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap capitalize">{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
