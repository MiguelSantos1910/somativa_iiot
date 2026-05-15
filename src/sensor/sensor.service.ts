import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { AppService } from 'src/app.service';

@Injectable()
export class SensorService {
  constructor(private readonly appService: AppService) {}

  async create(createSensorDto: CreateSensorDto) {
    const fazendaFound = await this.appService.fazendaLocal.findUnique({
      where: {
        id: createSensorDto.fazendaId,
      },
    });
    if (fazendaFound === null) {
      throw new NotFoundException(
        `Fazenda com o id: ${createSensorDto.fazendaId} não encontrada!`,
      );
    }
    return this.appService.sensores.create({
      data: { ...CreateSensorDto },
    });
  }

  findAll() {
    return this.appService.sensores.findMany();
  }

  findOne(id: string) {
    return this.appService.sensores.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSensorDto: UpdateSensorDto) {
    const fazendaFound = await this.appService.sensores.findUnique({
      where: {
        id: updateSensorDto.fazendaId,
      },
      data: { ...updateSensorDto },
    });
    if (fazendaFound === null) {
      throw new NotFoundException(
        `Fazenda com o id: ${updateSensorDto.fazendaId} não encontrada!`,
      );
    }
    return this.appService.sensores.update({
      where: {
        id,
      },
      data: { ...updateSensorDto },
    });
  }

  remove(id: string) {
    return this.appService.sensores.delete({
      where: {
        id,
      },
    });
  }
}
