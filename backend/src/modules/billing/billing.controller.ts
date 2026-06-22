/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '../../shared/enums/roles.enum';

@Controller('billing')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Post('claim')
  @Roles(UserRole.BILLING, UserRole.ADMIN)
  createClaim(@Body() createClaimDto: CreateClaimDto) {
    return this.billingService.createClaim(createClaimDto);
  }

  @Get('claim')
  findAllClaims() {
    return this.billingService.findAllClaims();
  }

  @Get('claim/:id')
  findClaim(@Param('id') id: string) {
    return this.billingService.findClaim(id);
  }

  @Put('invoice/:id')
  updateInvoice(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.billingService.updateInvoice(id, updateInvoiceDto);
  }
}