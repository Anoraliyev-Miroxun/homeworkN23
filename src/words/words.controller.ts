import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) { }

  @Post()
  create(@Body() createWordDto: CreateWordDto) {
    return this.wordsService.createWord(createWordDto);
  }

  @Get()
  findAll() {
    return this.wordsService.findAll();
  }

  @Get()
  getWord() {
    return this.wordsService.getRandomWord();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWordDto: UpdateWordDto) {
    return this.wordsService.update(+id, updateWordDto);
  }


  @Post('check/:userId')
  async check(
    @Param('userId') userId: string,
    @Body() body: { wordId: number; answer: string },
  ) {
    return this.wordsService.javobniTek(
      Number(userId),
      body.wordId,
      body.answer,
    );
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordsService.remove(+id);
  }
}
