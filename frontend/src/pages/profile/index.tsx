import { useAuth } from '@/hooks/useAuth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="card max-w-lg">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p>
        <strong>Name:</strong> {user?.firstName} {user?.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p>
        <strong>Role:</strong> {user?.role}
      </p>
      {/* Add edit form */}
    </div>
  );
}
