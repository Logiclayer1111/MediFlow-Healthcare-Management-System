/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Claim } from './claim.entity';

export enum InvoiceStatus {
  PENDING = 'pending',
  PAID = 'paid',
  OVERDUE = 'overdue',
}

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  claimId!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amountDue!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amountPaid!: number;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
    default: InvoiceStatus.PENDING,
  })
  status!: InvoiceStatus;

  @Column({ type: 'timestamp' })
  dueDate!: Date;

  @Column({ nullable: true })
  paidDate!: Date;

  @OneToOne(() => Claim, (claim) => claim.invoice)
  @JoinColumn({ name: 'claimId' })
  claim!: Claim;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}