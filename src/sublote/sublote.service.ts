import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubloteDto } from './dto/create-sublote.dto';
import { UpdateSubloteDto } from './dto/update-sublote.dto';
import { AppService } from 'src/app.service';

@Injectable()
export class SubloteService {
  constructor(private readonly appService: AppService) {}
  async create(createSubloteDto: CreateSubloteDto) {
    const subloteFound = await this.appService.fazendaLocal.findUnique({
      where: {
        id: createSubloteDto.fazendaId,
      },
    });
    if (subloteFound === null) {
      throw new NotFoundException(
        `sublote com o id: ${createSubloteDto.fazendaId} não encontrada!`,
      );
    }
    return this.appService.sublote.create({
      data: { ...createSubloteDto },
    });
  }

  findAll() {
    return this.appService.sublote.findMany();
  }

  findOne(id: string) {
    return this.appService.sublote.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateSubloteDto: UpdateSubloteDto) {
    const subloteFound = await this.appService.sublote.findUnique({
      where: {
        id: updateSubloteDto.fazendaId,
      },
    });
    if (subloteFound === null) {
      throw new NotFoundException(
        `Fazenda com o id: ${updateSubloteDto.fazendaId} não encontrada!`,
      );
    }
    return this.appService.sublote.update({
      where: {
        id,
      },
      data: { ...updateSubloteDto },
    });
  }

  remove(id: string) {
    return this.appService.sublote.delete({
      where: {
        id,
      },
    });
  }
}
