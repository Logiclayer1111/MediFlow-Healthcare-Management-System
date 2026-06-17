export interface Encounter {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  chiefComplaint?: string;
  history?: string;
  physicalExam?: string;
  diagnosis?: string;
  plan?: string;
  vitals?: any;
  patient?: any;
  doctor?: any;
  observations?: Observation[];
}

export interface Observation {
  id: string;
  encounterId: string;
  code: string;
  display: string;
  value: any;
  unit?: string;
  date: string;
}