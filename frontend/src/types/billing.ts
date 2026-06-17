export interface Claim {
  id: string;
  patientId: string;
  serviceDetails: any;
  totalAmount: number;
  status: 'draft' | 'submitted' | 'accepted' | 'rejected' | 'paid';
  submissionDate?: string;
  insurerId?: string;
  invoice?: Invoice;
}

export interface Invoice {
  id: string;
  claimId: string;
  amountDue: number;
  amountPaid: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string;
  paidDate?: string;
}