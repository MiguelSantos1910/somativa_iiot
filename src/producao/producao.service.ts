import { Injectable } from '@nestjs/common';
import { CreateProducaoDto } from './dto/create-producao.dto';
import { UpdateProducaoDto } from './dto/update-producao.dto';

@Injectable()
export class ProducaoService {
  create(createProducaoDto: CreateProducaoDto) {
    return 'This action adds a new producao';
  }

  findAll() {
    return `This action returns all producao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producao`;
  }

  update(id: number, updateProducaoDto: UpdateProducaoDto) {
    return `This action updates a #${id} producao`;
  }

  remove(id: number) {
    return `This action removes a #${id} producao`;
  }
}
