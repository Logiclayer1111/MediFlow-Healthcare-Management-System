/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('diagnose')
  async diagnose(@Body() patientData: any) {
    return this.aiService.diagnose(patientData);
  }

  @Post('summarize')
  async summarize(@Body() data: { text: string }) {
    return this.aiService.summarize(data.text);
  }
}