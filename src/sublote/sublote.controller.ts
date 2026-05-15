import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubloteService } from './sublote.service';
import { CreateSubloteDto } from './dto/create-sublote.dto';
import { UpdateSubloteDto } from './dto/update-sublote.dto';

@Controller('sublote')
export class SubloteController {
  constructor(private readonly subloteService: SubloteService) {}

  @Post()
  create(@Body() createSubloteDto: CreateSubloteDto) {
    return this.subloteService.create(createSubloteDto);
  }

  @Get()
  findAll() {
    return this.subloteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subloteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubloteDto: UpdateSubloteDto) {
    return this.subloteService.update(+id, updateSubloteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subloteService.remove(+id);
  }
}
