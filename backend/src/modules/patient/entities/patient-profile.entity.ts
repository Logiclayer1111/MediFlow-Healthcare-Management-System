/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('patient_profiles')
export class PatientProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: true })
  gender!: string;

  @Column({ nullable: true })
  bloodType!: string;

  @Column('text', { nullable: true })
  allergies!: string;

  @Column('text', { nullable: true })
  medications!: string;

  @Column('text', { nullable: true })
  medicalHistory!: string;

  @Column('text', { nullable: true })
  surgicalHistory!: string;

  @Column('jsonb', { default: {} })
  insurance: any; // structured insurance data

  @Column('jsonb', { default: {} })
  emergencyContact: any;
}