/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PatientProfile } from './patient-profile.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';
import { Encounter } from '../../clinical/entities/encounter.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ nullable: true })
  dateOfBirth!: Date;

  @Column({ default: true })
  isActive!: boolean;

  @OneToOne(() => PatientProfile, { cascade: true })
  @JoinColumn()
  profile!: PatientProfile;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments!: Appointment[];

  @OneToMany(() => Encounter, (encounter: Encounter) => encounter.patient)
  encounters!: Encounter[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}