import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaService) { }

  async createWord(dto: CreateWordDto) {
    return this.prisma.words.create({ data: dto });
  }

  async getRandomWord() {
    const words = await this.prisma.words.findMany();
    if (!words.length) {
      throw new NotFoundException('Soz yoq topilmadi');
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambled = randomWord.text.split('').sort(() => Math.random() - 0.5).join('');

    return { id: randomWord.id, scrambled };
  }



  async findAll() {
    const users = await this.prisma.users.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id }
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: number, UpdateWordDto: UpdateWordDto) {
    await this.findOne(id);
    const user = await this.prisma.users.update({
      data: UpdateWordDto,
      where: { id },
    });
    return user;
  }


  async javobniTek(userId: number, wordId: number, answer: string) {
    const word = await this.prisma.words.findUnique({ where: { id: wordId } });
    if (!word) throw new NotFoundException('Soz topilmadi');

    const isCorrect = word.text.toLowerCase() === answer.toLowerCase();

    if (isCorrect) {
      await this.prisma.users.update({
        where: { id: userId },
        data: { score: { increment: 1 } },
      });
    }

    return { correct: isCorrect, word: word.text };
  }


  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.users.delete({ where: { id } });
    return {};
  }
}
