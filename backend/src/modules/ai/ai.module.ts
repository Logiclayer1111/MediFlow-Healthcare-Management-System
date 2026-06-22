/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { LangchainService } from './langchain.service';

@Module({
  controllers: [AiController],
  providers: [AiService, LangchainService],
  exports: [AiService],
})
export class AiModule {}