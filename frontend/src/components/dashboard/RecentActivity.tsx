import { ReactNode } from 'react';

interface Activity {
  id: string;
  title: string;
  time: string;
  type: 'appointment' | 'patient' | 'claim' | 'prescription';
}

export default function RecentActivity({ activities }: { activities: Activity[] }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.map((act) => (
          <li key={act.id} className="py-3 flex justify-between items-center">
            <span>{act.title}</span>
            <span className="text-sm text-gray-500">{act.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
