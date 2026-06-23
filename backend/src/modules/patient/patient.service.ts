/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm'; // Added DeepPartial
import { Patient } from './entities/patient.entity';
import { PatientProfile } from './entities/patient-profile.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
    @InjectRepository(PatientProfile)
    private profileRepository: Repository<PatientProfile>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const { profile: profileInput, ...patientData } = createPatientDto;
    const profileData = Array.isArray(profileInput)
      ? profileInput[0]
      : profileInput;
    const profile = profileData
      ? this.profileRepository.create(profileData)
      : undefined;

    // Cast to DeepPartial<Patient> to resolve type mismatch
    const patient = this.patientRepository.create({
      ...patientData,
      profile,
    } as DeepPartial<Patient>);
    return this.patientRepository.save(patient);
  }

  async findAll(options: { page: number; limit: number }) {
    const [items, total] = await this.patientRepository.findAndCount({
      skip: (options.page - 1) * options.limit,
      take: options.limit,
      relations: ['profile'],
      order: { createdAt: 'DESC' },
    });
    return { items, total, page: options.page, limit: options.limit };
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.patientRepository.findOne({
      where: { id },
      relations: ['profile', 'appointments', 'encounters'],
    });
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient> {
    const patient = await this.findOne(id);
    if (updatePatientDto.profile) {
      // If the DTO sends an array, you may need to handle it similarly,
      // but for now assume it's a single object.
      await this.profileRepository.update(patient.profile.id, updatePatientDto.profile);
    }
    await this.patientRepository.update(id, { ...updatePatientDto, profile: undefined });
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.patientRepository.delete(id);
  }
}