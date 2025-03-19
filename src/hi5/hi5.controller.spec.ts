import { Test, TestingModule } from '@nestjs/testing';
import { Hi5Controller } from './hi5.controller';

describe('Hi5Controller', () => {
  let controller: Hi5Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Hi5Controller],
    }).compile();

    controller = module.get<Hi5Controller>(Hi5Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
