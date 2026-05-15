import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDadoDto } from './dto/create-dado.dto';
import { UpdateDadoDto } from './dto/update-dado.dto';
import { AppService } from 'src/app.service';
import { SensorService } from 'src/sensor/sensor.service';

@Injectable()
export class DadosService {
  constructor(private readonly appService: AppService) {}

  async create(createDadoDto: CreateDadoDto) {
    const sensorService = new SensorService(this.appService);
    const sensorFound = await sensorService.findOne(createDadoDto.sensorId);
    if (sensorFound === null) {
      throw new NotFoundException(
        `Dado com id: ${createDadoDto.sensorId} não encontrado!`,
      );
    }
    return this.appService.dados.create({
      data: { ...createDadoDto },
    });
  }

  findAll() {
    return this.appService.dados.findMany();
  }

  findOne(id: string) {
    return this.appService.dados.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateDadoDto: UpdateDadoDto) {
    const fazendaFound = await this.appService.dados.findUnique({
      where: {
        id: updateDadoDto.sensorId,
      },
    });
    if (fazendaFound === null) {
      throw new NotFoundException(
        `Dado com o id: ${updateDadoDto.sensorId} não encontrada!`,
      );
    }
    return this.appService.dados.update({
      where: {
        id,
      },
      data: { ...updateDadoDto },
    });
  }

  remove(id: string) {
    return this.appService.dados.delete({
      where: {
        id,
      },
    });
  }
}
