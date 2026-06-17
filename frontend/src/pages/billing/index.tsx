import { useClaims } from '@/hooks/useBilling';

export default function BillingPage() {
  const { data: claims, isLoading } = useClaims();

  if (isLoading) return <div>Loading claims...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Billing & Claims</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Claim ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {claims?.map((claim: any) => (
              <tr key={claim.id}>
                <td className="px-6 py-4 whitespace-nowrap">{claim.id.slice(0, 8)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {claim.patient?.firstName} {claim.patient?.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${claim.totalAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{claim.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
