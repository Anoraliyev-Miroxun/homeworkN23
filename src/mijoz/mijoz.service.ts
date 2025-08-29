import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMijozDto } from './dto/create-mijoz.dto';
import { UpdateMijozDto } from './dto/update-mijoz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mijoz } from './entities/mijoz.entity';
import { Repository } from 'typeorm';
import { getsuccessRes } from 'src/utils/succes-response';

@Injectable()
export class MijozService {
  constructor(
    @InjectRepository(Mijoz) private readonly mijozRepo: Repository<Mijoz>
  ) { }
  async create(createMijozDto: CreateMijozDto) {
    const { email } = createMijozDto;
    const existEmail = await this.mijozRepo.findOne({ where: { email } })
    if(existEmail){
      throw new ConflictException("email arledy esisty")
    }
    const yangiMijoz= this.mijozRepo.create(createMijozDto)
    await this.mijozRepo.save(yangiMijoz);
    return getsuccessRes(yangiMijoz,201)
  }

  async findAll() {
    const data=await this.mijozRepo.find({
      relations:{orders:{product:true}},
      order:{createdAt:"DESC"}
    })
    return getsuccessRes(data)
  }

  async findOne(id: number) {
    const data=await this.mijozRepo.findOne({where:{id},
    relations:{orders:{product:true}}
  })
    if(!data){
      throw new NotFoundException("Mijoz not found")
    };

    return getsuccessRes(data);
  }

  async update(id: number, updateMijozDto: UpdateMijozDto) {
    await this.mijozRepo.update({id},updateMijozDto)
    const data=await this.mijozRepo.findOne({where:{id}})
    if(!data){
      throw new NotFoundException('Mijoz not found')
    };

    return getsuccessRes(data);
  }

  async remove(id: number) {
    const data=await this.mijozRepo.delete({id});
    if(!data.affected){
      throw new NotFoundException('mijoz not found')
    }

    return getsuccessRes({})
  }
}
