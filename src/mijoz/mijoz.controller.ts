import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MijozService } from './mijoz.service';
import { CreateMijozDto } from './dto/create-mijoz.dto';
import { UpdateMijozDto } from './dto/update-mijoz.dto';

@Controller('mijoz')
export class MijozController {
  constructor(private readonly mijozService: MijozService) {}

  @Post()
  create(@Body() createMijozDto: CreateMijozDto) {
    return this.mijozService.create(createMijozDto);
  }

  @Get()
  findAll() {
    return this.mijozService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mijozService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMijozDto: UpdateMijozDto) {
    return this.mijozService.update(+id, updateMijozDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mijozService.remove(+id);
  }
}
