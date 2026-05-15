import { Module } from '@nestjs/common';
import { SafraService } from './safra.service';
import { SafraController } from './safra.controller';

@Module({
  controllers: [SafraController],
  providers: [SafraService],
})
export class SafraModule {}
