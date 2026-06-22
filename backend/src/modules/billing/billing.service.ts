/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './entities/claim.entity';
import { Invoice } from './entities/invoice.entity';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Claim)
    private claimRepository: Repository<Claim>,
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async createClaim(createClaimDto: CreateClaimDto): Promise<Claim> {
    const claim = this.claimRepository.create(createClaimDto);
    return this.claimRepository.save(claim);
  }

  async findAllClaims(): Promise<Claim[]> {
    return this.claimRepository.find({ relations: ['patient', 'invoice'] });
  }

  async findClaim(id: string): Promise<Claim> {
    const claim = await this.claimRepository.findOne({
      where: { id },
      relations: ['patient', 'invoice'],
    });
    if (!claim) throw new NotFoundException('Claim not found');
    return claim;
  }

  async updateInvoice(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    await this.invoiceRepository.update(id, updateInvoiceDto);
    const invoice = await this.invoiceRepository.findOne({ where: { id } });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }
}