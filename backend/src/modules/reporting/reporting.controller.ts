/* eslint-disable prettier/prettier */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '../../shared/enums/roles.enum';

@Controller('reports')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReportingController {
  constructor(private reportingService: ReportingService) {}

  @Get('clinical')
  @Roles(UserRole.ADMIN, UserRole.DOCTOR)
  getClinicalReport(@Query('start') start: string, @Query('end') end: string) {
    return this.reportingService.getClinicalReport(start, end);
  }

  @Get('financial')
  @Roles(UserRole.ADMIN, UserRole.BILLING)
  getFinancialReport(@Query('start') start: string, @Query('end') end: string) {
    return this.reportingService.getFinancialReport(start, end);
  }

  @Get('appointments')
  getAppointmentReport(@Query('start') start: string, @Query('end') end: string) {
    return this.reportingService.getAppointmentReport(start, end);
  }
}