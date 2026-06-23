/* eslint-disable prettier/prettier */
import { describe, beforeAll, it, afterAll } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as http from 'http';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await app.listen(0);
  });

  it('/api/patients (GET)', async () => {
    const server = app.getHttpServer() as http.Server;
    const address = server.address() as {
      port: number;
    } | null;

    if (!address || typeof address.port !== 'number') {
      throw new Error('Could not determine server port');
    }

    await new Promise<void>((resolve, reject) => {
      const req = http.request(
        {
          hostname: '127.0.0.1',
          port: address.port,
          path: '/api/patients',
          method: 'GET',
        },
        (res) => {
          if (res.statusCode === 401) {
            resolve();
            return;
          }
          reject(new Error(`Expected 401, got ${res.statusCode}`));
        },
      );

      req.on('error', reject);
      req.end();
    });
  });

  afterAll(async () => {
    await app.close();
  });
});