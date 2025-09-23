import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { retry } from 'rxjs';
import { serializeJsonQuery } from 'generated/prisma/runtime/library';

@Injectable()
export class UsersService {
  constructor(private readonly prisma:PrismaService){}
  async create(createUserDto: CreateUserDto) {

    const yanigUser=await this.prisma.users.create({data:createUserDto})
    return yanigUser
  }

  async  findAll() {
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

 async  update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    const user = await this.prisma.users.update({
      data: updateUserDto,
      where: { id },
    });
    return user;
  }

   async remove(id: number) {
    await this.findOne(id);
    await this.prisma.users.delete({ where: { id } });
    return {};
  }
}
