/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { Invoice } from './invoice.entity';

export enum ClaimStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  PAID = 'paid',
}

@Entity('claims')
export class Claim {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  patientId!: string;

  @Column({ type: 'jsonb' })
  serviceDetails: any; // CPT, ICD-10, amounts

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount!: number;

  @Column({
    type: 'enum',
    enum: ClaimStatus,
    default: ClaimStatus.DRAFT,
  })
  status!: ClaimStatus;

  @Column({ nullable: true })
  submissionDate!: Date;

  @Column({ nullable: true })
  insurerId!: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patientId' })
  patient!: Patient;

  @OneToOne(() => Invoice, (invoice: Invoice) => invoice.claim)
  invoice: Invoice;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}