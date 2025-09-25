import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { connected } from 'process';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createPostInput: CreatePostInput) {
    const user = await this.prisma.user.findUnique({ where: { id: createPostInput.userId } })
    if (!user) {
      throw new NotFoundException("user not found")
    }
    return this.prisma.post.create({ data: createPostInput })
  }

  async findAll() {
    return this.prisma.post.findMany({ include: { user: true } })
  }

  async findOne(id: number) {
    const data = await this.prisma.post.findUnique({ where: { id }, include: { user: true } })
    if (!data) {
      throw new NotFoundException("post not fund")
    }
    return data;
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    await this.findOne(id)
    const data = await this.prisma.post.update({ where: { id }, data: updatePostInput })
    return data
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.prisma.post.delete({ where: { id } })
    return {};
  }
}
