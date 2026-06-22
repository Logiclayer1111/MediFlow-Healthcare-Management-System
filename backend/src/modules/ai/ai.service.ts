/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { LangchainService } from './langchain.service';

@Injectable()
export class AiService {
  constructor(private langchainService: LangchainService) {}

  async diagnose(patientData: any): Promise<any> {
    // Use LangChain to generate possible diagnoses based on symptoms and history
    const prompt = `Based on the following patient data, suggest possible diagnoses:
    ${JSON.stringify(patientData)}`;
    const response = await this.langchainService.generateCompletion(prompt);
    return { diagnosis: response };
  }

  async summarize(text: string): Promise<any> {
    const summary = await this.langchainService.summarizeText(text);
    return { summary };
  }
}