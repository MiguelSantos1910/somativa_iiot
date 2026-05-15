import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DadosService } from './dados.service';
import { CreateDadoDto } from './dto/create-dado.dto';
import { UpdateDadoDto } from './dto/update-dado.dto';

@Controller('dados')
export class DadosController {
  constructor(private readonly dadosService: DadosService) {}

  @Post()
  create(@Body() createDadoDto: CreateDadoDto) {
    return this.dadosService.create(createDadoDto);
  }

  @Get()
  findAll() {
    return this.dadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDadoDto: UpdateDadoDto) {
    return this.dadosService.update(+id, updateDadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dadosService.remove(+id);
  }
}
