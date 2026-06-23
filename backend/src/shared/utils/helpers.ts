/* eslint-disable prettier/prettier */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15);
}