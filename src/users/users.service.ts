import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { retry, throwError } from 'rxjs';
import { PipesConsumer } from '@nestjs/core/pipes';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserInput: CreateUserInput) {
    const newUser = await this.prisma.user.create({ data: createUserInput })
    return newUser;
  }

  async findAll() {
    return await this.prisma.user.findMany({ include: { posts: true } })
  }

  async findOne(id: number) {
    const data = await this.prisma.user.findUnique({ where: { id }, include: { posts: true } });
    if (!data) {
      throw new NotFoundException("user not found")
    }
    return data;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    await this.findOne(id)
    return this.prisma.user.update({ where: { id }, data: updateUserInput })
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.prisma.user.delete({ where: { id } })
    return {};
  }
}
