/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, UseGuards } from '@nestjs/common';
import { ClinicalService } from './clinical.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '../../shared/enums/roles.enum';

@Controller('clinical')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClinicalController {
  constructor(private clinicalService: ClinicalService) {}

  @Post('encounter')
  @Roles(UserRole.DOCTOR, UserRole.NURSE)
  createEncounter(@Body() createEncounterDto: CreateEncounterDto) {
    return this.clinicalService.createEncounter(createEncounterDto);
  }

  @Get('encounter/:id')
  getEncounter(@Param('id') id: string) {
    return this.clinicalService.getEncounter(id);
  }

  @Post('observation')
  @Roles(UserRole.DOCTOR, UserRole.NURSE, UserRole.LAB)
  createObservation(@Body() data: any) {
    return this.clinicalService.createObservation(data);
  }

  @Put('observation/:id')
  updateObservation(@Param('id') id: string, @Body() updateObservationDto: UpdateObservationDto) {
    return this.clinicalService.updateObservation(id, updateObservationDto);
  }
}