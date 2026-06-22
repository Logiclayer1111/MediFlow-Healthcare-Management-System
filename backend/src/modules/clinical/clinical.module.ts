/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicalController } from './clinical.controller';
import { ClinicalService } from './clinical.service';
import { Encounter } from './entities/encounter.entity';
import { Observation } from './entities/observation.entity';
import { ClinicalForm } from './entities/clinical-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encounter, Observation, ClinicalForm])],
  controllers: [ClinicalController],
  providers: [ClinicalService],
  exports: [ClinicalService],
})
export class ClinicalModule {}