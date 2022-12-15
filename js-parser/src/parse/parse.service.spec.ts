import { Test, TestingModule } from '@nestjs/testing';
import { ParseService } from './parse.service';

describe('ParseService', () => {
  let service: ParseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseService],
    }).compile();

    service = module.get<ParseService>(ParseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
