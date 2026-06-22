/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encounter } from './entities/encounter.entity';
import { Observation } from './entities/observation.entity';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';

@Injectable()
export class ClinicalService {
  constructor(
    @InjectRepository(Encounter)
    private encounterRepository: Repository<Encounter>,
    @InjectRepository(Observation)
    private observationRepository: Repository<Observation>,
  ) {}

  async createEncounter(createEncounterDto: CreateEncounterDto): Promise<Encounter> {
    const encounter = this.encounterRepository.create(createEncounterDto);
    return this.encounterRepository.save(encounter);
  }

  async getEncounter(id: string): Promise<Encounter> {
    const encounter = await this.encounterRepository.findOne({
      where: { id },
      relations: ['observations', 'patient', 'doctor'],
    });
    if (!encounter) throw new NotFoundException('Encounter not found');
    return encounter;
  }

  async createObservation(data: any): Promise<Observation> {
    const observation = this.observationRepository.create(data as Partial<Observation>);
    return this.observationRepository.save(observation);
  }

  async updateObservation(id: string, updateObservationDto: UpdateObservationDto): Promise<Observation> {
    await this.observationRepository.update(id, updateObservationDto);
    const observation = await this.observationRepository.findOne({ where: { id } });
    if (!observation) throw new NotFoundException('Observation not found');
    return observation;
  }
}