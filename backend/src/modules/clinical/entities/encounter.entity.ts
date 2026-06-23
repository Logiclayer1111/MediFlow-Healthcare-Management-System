/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { User } from '../../user/entities/user.entity';
import { Observation } from './observation.entity';

@Entity('encounters')
export class Encounter {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  patientId!: string;

  @Column()
  doctorId!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @Column({ type: 'text', nullable: true })
  chiefComplaint!: string;

  @Column({ type: 'text', nullable: true })
  history!: string;

  @Column({ type: 'text', nullable: true })
  physicalExam!: string;

  @Column({ type: 'text', nullable: true })
  diagnosis!: string;

  @Column({ type: 'text', nullable: true })
  plan!: string;

  @Column({ type: 'jsonb', nullable: true })
  vitals: any; // BP, HR, temp, etc.

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patientId' })
  patient!: Patient;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'doctorId' })
  doctor!: User;

  @OneToMany(() => Observation, (obs: Observation) => obs.encounter)
  observations!: Observation[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}