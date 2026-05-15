import { Test, TestingModule } from '@nestjs/testing';
import { SubloteService } from './sublote.service';

describe('SubloteService', () => {
  let service: SubloteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubloteService],
    }).compile();

    service = module.get<SubloteService>(SubloteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
