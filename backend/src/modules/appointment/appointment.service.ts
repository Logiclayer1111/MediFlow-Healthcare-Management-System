/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return this.appointmentRepository.save(appointment);
  }

  async findAll(filters: { doctorId?: string; patientId?: string }) {
    const query = this.appointmentRepository.createQueryBuilder('appointment');
    if (filters.doctorId) {
      query.andWhere('appointment.doctorId = :doctorId', { doctorId: filters.doctorId });
    }
    if (filters.patientId) {
      query.andWhere('appointment.patientId = :patientId', { patientId: filters.patientId });
    }
    query.leftJoinAndSelect('appointment.patient', 'patient');
    query.leftJoinAndSelect('appointment.doctor', 'doctor');
    return query.getMany();
  }

  async findOne(id: string): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
      relations: ['patient', 'doctor'],
    });
    if (!appointment) throw new NotFoundException('Appointment not found');
    return appointment;
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    await this.findOne(id);
    await this.appointmentRepository.update(id, updateAppointmentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}