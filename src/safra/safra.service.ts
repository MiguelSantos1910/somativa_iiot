import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSafraDto } from './dto/create-safra.dto';
import { UpdateSafraDto } from './dto/update-safra.dto';
import { AppService } from 'src/app.service';

@Injectable()
export class SafraService {
  constructor(private readonly appService: AppService) {}

  async create(createSafraDto: CreateSafraDto) {
    const safraFound = await this.appService.tipoProducao.findUnique({
      where: {
        id: createSafraDto.producaoId,
      },
    });
    if (safraFound === null) {
      throw new NotFoundException(
        `safra com o id: ${createSafraDto.producaoId} não encontrada!`,
      );
    }
    return this.appService.safra.create({
      data: { ...createSafraDto },
    });
  }

  findAll() {
    return this.appService.safra.findMany();
  }

  findOne(id: string) {
    return this.appService.sensores.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSafraDto: UpdateSafraDto) {
    const safraFound = await this.appService.sensores.findUnique({
      where: {
        id: updateSafraDto.producaoId,
      },
    });
    if (safraFound === null) {
      throw new NotFoundException(
        `safra com o id: ${updateSafraDto.producaoId} não encontrada!`,
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
    return this.appService.safra.delete({
      where: {
        id,
      },
    });
  }
}
