import { Module } from '@nestjs/common';
import { SubloteService } from './sublote.service';
import { SubloteController } from './sublote.controller';

@Module({
  controllers: [SubloteController],
  providers: [SubloteService],
})
export class SubloteModule {}
