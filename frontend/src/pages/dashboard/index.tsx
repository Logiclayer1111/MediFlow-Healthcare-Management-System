import { useAuth } from '@/hooks/useAuth';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { usePatients } from '@/hooks/usePatients';
import { useAppointments } from '@/hooks/useAppointments';
import { useClaims } from '@/hooks/useBilling';

export default function Dashboard() {
  const { user } = useAuth();
  const { data: patients } = usePatients(1, 1); // just for count
  const { data: appointments } = useAppointments();
  const { data: claims } = useClaims();

  // hooks may return Axios responses; ensure we access the payload
  const totalPatients = patients?.data?.total ?? patients?.total ?? 0;
  const totalAppointments = appointments?.data?.length ?? 0;
  const pendingClaims = claims?.data?.filter((c: any) => c.status === 'submitted').length ?? 0;

  // Mock recent activities
  const recentActivities: {
    id: string;
    title: string;
    time: string;
    type: 'patient' | 'appointment' | 'claim' | 'prescription';
  }[] = [
    { id: '1', title: 'New patient John Doe registered', time: '2 hours ago', type: 'patient' },
    {
      id: '2',
      title: 'Appointment with Jane Smith confirmed',
      time: '3 hours ago',
      type: 'appointment',
    },
    { id: '3', title: 'Claim #12345 submitted', time: '5 hours ago', type: 'claim' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome back, {user?.firstName}!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Patients" value={totalPatients} />
        <StatsCard title="Appointments Today" value={totalAppointments} />
        <StatsCard title="Pending Claims" value={pendingClaims} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={recentActivities} />
        {/* additional widgets here */}
      </div>
    </div>
  );
}
