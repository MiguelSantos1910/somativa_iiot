import { Test, TestingModule } from '@nestjs/testing';
import { SubloteController } from './sublote.controller';
import { SubloteService } from './sublote.service';

describe('SubloteController', () => {
  let controller: SubloteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubloteController],
      providers: [SubloteService],
    }).compile();

    controller = module.get<SubloteController>(SubloteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
