/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Encounter } from './encounter.entity';

@Entity('observations')
export class Observation {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  encounterId!: string;

  @Column()
  code!: string; // LOINC or other

  @Column()
  display!: string;

  @Column({ type: 'jsonb' })
  value: any; // number, string, etc.

  @Column({ nullable: true })
  unit!: string;

  @Column({ type: 'timestamp' })
  date!: Date;

  @ManyToOne(() => Encounter, (encounter) => encounter.observations)
  @JoinColumn({ name: 'encounterId' })
  encounter!: Encounter;
}