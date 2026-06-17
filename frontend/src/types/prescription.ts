export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  medication: string;
  dosage: string;
  frequency: string;
  route?: string;
  quantity?: number;
  refills?: number;
  instructions?: string;
  datePrescribed: string;
  dateExpires?: string;
  status: 'active' | 'discontinued' | 'expired' | 'completed';
}