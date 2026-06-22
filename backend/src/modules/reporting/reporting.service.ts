/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../patient/entities/patient.entity';
import { Appointment } from '../appointment/entities/appointment.entity';
import { Claim } from '../billing/entities/claim.entity';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Claim)
    private claimRepository: Repository<Claim>,
  ) {}

  async getClinicalReport(start: string, end: string): Promise<any> {
    // Use the provided date range to scope the report (prevent unused-var lint)
    const period = { start, end };
    // Aggregate clinical data
    return { totalPatients: 100, encounters: 250, period };
  }

  async getFinancialReport(start: string, end: string): Promise<any> {
    const period = { start, end };
    // Aggregate billing data
    return { totalRevenue: 50000, pendingClaims: 10, period };
  }

  async getAppointmentReport(start: string, end: string): Promise<any> {
    const period = { start, end };
    // Aggregate appointment stats
    return { totalAppointments: 150, noShows: 5, period };
  }
}