/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clinical_forms')
export class ClinicalForm {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('jsonb')
  schema: any; // JSON schema for custom forms

  @Column({ default: true })
  isActive!: boolean;
}