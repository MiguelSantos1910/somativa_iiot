import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumosModule } from './insumos/insumos.module';
import { ProducaoModule } from './producao/producao.module';
import { FazendaModule } from './fazenda/fazenda.module';
import { LoteModule } from './lote/lote.module';
import { SubloteModule } from './sublote/sublote.module';
import { SafraModule } from './safra/safra.module';
import { EventosModule } from './eventos/eventos.module';
import { SensorModule } from './sensor/sensor.module';
import { DadosModule } from './dados/dados.module';

@Module({
  imports: [InsumosModule, ProducaoModule, FazendaModule, LoteModule, SubloteModule, SafraModule, EventosModule, SensorModule, DadosModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
