import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/user';

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: '📊',
    roles: [
      UserRole.ADMIN,
      UserRole.DOCTOR,
      UserRole.NURSE,
      UserRole.RECEPTIONIST,
      UserRole.BILLING,
      UserRole.PATIENT,
    ],
  },
  {
    href: '/patients',
    label: 'Patients',
    icon: '👤',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.RECEPTIONIST],
  },
  {
    href: '/appointments',
    label: 'Appointments',
    icon: '📅',
    roles: [
      UserRole.ADMIN,
      UserRole.DOCTOR,
      UserRole.NURSE,
      UserRole.RECEPTIONIST,
      UserRole.PATIENT,
    ],
  },
  {
    href: '/clinical/encounters',
    label: 'Clinical',
    icon: '🩺',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.NURSE],
  },
  {
    href: '/prescriptions',
    label: 'Prescriptions',
    icon: '💊',
    roles: [UserRole.ADMIN, UserRole.DOCTOR],
  },
  { href: '/billing', label: 'Billing', icon: '💰', roles: [UserRole.ADMIN, UserRole.BILLING] },
  {
    href: '/reports',
    label: 'Reports',
    icon: '📈',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.BILLING],
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: '⚙️',
    roles: [
      UserRole.ADMIN,
      UserRole.DOCTOR,
      UserRole.NURSE,
      UserRole.RECEPTIONIST,
      UserRole.BILLING,
      UserRole.PATIENT,
    ],
  },
];

export default function Sidebar() {
  const router = useRouter();
  const { user } = useAuth();

  // Filter nav items based on user role
  const filteredItems = navItems.filter((item) => item.roles.some((role) => role === user?.role));

  return (
    <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <nav className="mt-5 px-2 space-y-1">
        {filteredItems.map((item) => {
          const isActive =
            router.pathname === item.href || router.pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
