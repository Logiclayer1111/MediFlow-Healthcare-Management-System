/**
 * User roles supported by the MediFlow system.
 * Matches the backend UserRole enum.
 */
export enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  RECEPTIONIST = 'receptionist',
  BILLING = 'billing',
  ADMIN = 'admin',
  LAB = 'lab',
}

/**
 * User object returned from the API.
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  isActive: boolean;
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
}

/**
 * Response payload from the /auth/login endpoint.
 */
export interface AuthResponse {
  access_token: string;
  user: User;
}

/**
 * Credentials for logging in.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Data required for user registration.
 */
export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}