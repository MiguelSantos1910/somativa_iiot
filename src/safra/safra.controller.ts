import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SafraService } from './safra.service';
import { CreateSafraDto } from './dto/create-safra.dto';
import { UpdateSafraDto } from './dto/update-safra.dto';

@Controller('safra')
export class SafraController {
  constructor(private readonly safraService: SafraService) {}

  @Post()
  create(@Body() createSafraDto: CreateSafraDto) {
    return this.safraService.create(createSafraDto);
  }

  @Get()
  findAll() {
    return this.safraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.safraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSafraDto: UpdateSafraDto) {
    return this.safraService.update(+id, updateSafraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.safraService.remove(+id);
  }
}
