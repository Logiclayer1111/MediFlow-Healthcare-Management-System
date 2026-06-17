import { createContext, createElement, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { login as apiLogin, logout as apiLogout, getCurrentUser } from '@/services/auth';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userData = await apiLogin(email, password);
      setUser(userData);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    apiLogout();
    setUser(null);
    router.push('/login');
  };

  return createElement(
    AuthContext.Provider,
    {
      value: {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      },
    },
    children,
  );
};

export const useAuth = () => useContext(AuthContext);