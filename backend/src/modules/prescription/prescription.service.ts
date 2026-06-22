/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from './entities/prescription.entity';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionRepository: Repository<Prescription>,
  ) {}

  async create(createPrescriptionDto: CreatePrescriptionDto): Promise<Prescription> {
    const prescription = this.prescriptionRepository.create(createPrescriptionDto);
    return this.prescriptionRepository.save(prescription);
  }

  async findAll(): Promise<Prescription[]> {
    return this.prescriptionRepository.find({ relations: ['patient', 'doctor'] });
  }

  async findOne(id: string): Promise<Prescription> {
    const prescription = await this.prescriptionRepository.findOne({
      where: { id },
      relations: ['patient', 'doctor'],
    });
    if (!prescription) throw new NotFoundException('Prescription not found');
    return prescription;
  }

  async update(id: string, updatePrescriptionDto: UpdatePrescriptionDto): Promise<Prescription> {
    await this.findOne(id);
    await this.prescriptionRepository.update(id, updatePrescriptionDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.prescriptionRepository.delete(id);
  }
}