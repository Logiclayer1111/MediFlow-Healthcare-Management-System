/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { OpenAI } from '@langchain/openai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { LLMChain } from 'langchain/chains';

@Injectable()
export class LangchainService implements OnModuleInit {
  private llm!: ChatOpenAI;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.llm = new ChatOpenAI({
      openAIApiKey: this.configService.get('OPENAI_API_KEY'),
      modelName: 'gpt-4',
      temperature: 0.7,
    });
  }

  async generateCompletion(prompt: string): Promise<string> {
    const response = await this.llm.invoke(prompt);
    const content = response.content;

    if (typeof content === 'string') {
      return content;
    }

    if (Array.isArray(content)) {
      return content
        .map((item) => {
          if (typeof item === 'string') return item;
          if (item && typeof item === 'object' && 'text' in item && typeof item.text === 'string') return item.text;
          return '';
        })
        .join('');
    }

    return '';
  }

  async summarizeText(text: string): Promise<string> {
    const template = `Summarize the following clinical text concisely:\n{text}`;
    const prompt = new PromptTemplate({ template, inputVariables: ['text'] });
    const chain = new LLMChain({ llm: this.llm, prompt });
    const result = await chain.call({ text });
    return result.text;
  }

  // Additional methods for retrieval-augmented generation (RAG) using pgvector
}