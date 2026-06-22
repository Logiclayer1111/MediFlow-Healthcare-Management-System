/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { User } from '../../user/entities/user.entity';

export enum PrescriptionStatus {
  ACTIVE = 'active',
  DISCONTINUED = 'discontinued',
  EXPIRED = 'expired',
  COMPLETED = 'completed',
}

@Entity('prescriptions')
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  patientId!: string;

  @Column()
  doctorId!: string;

  @Column()
  medication!: string;

  @Column()
  dosage!: string;

  @Column()
  frequency!: string;

  @Column({ nullable: true })
  route!: string;

  @Column({ nullable: true })
  quantity!: number;

  @Column({ nullable: true })
  refills!: number;

  @Column({ type: 'text', nullable: true })
  instructions!: string;

  @Column({ type: 'timestamp' })
  datePrescribed!: Date;

  @Column({ type: 'timestamp', nullable: true })
  dateExpires!: Date;

  @Column({
    type: 'enum',
    enum: PrescriptionStatus,
    default: PrescriptionStatus.ACTIVE,
  })
  status!: PrescriptionStatus;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patientId' })
  patient!: Patient;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'doctorId' })
  doctor: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}