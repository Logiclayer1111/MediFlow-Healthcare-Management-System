import { Invoice } from '@/types/billing';
import { format } from 'date-fns';

export default function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  if (!invoices.length) return <p className="text-gray-500">No invoices found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Invoice ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Amount Due
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                {inv.id.slice(0, 8)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${inv.amountDue}</td>
              <td className="px-6 py-4 whitespace-nowrap capitalize">{inv.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{format(new Date(inv.dueDate), 'PP')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
