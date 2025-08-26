import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SallerModel } from './models/saller.model';
import { getSuccessResponse } from 'src/utils/get-success-response';
import { IResponse } from 'src/interface/success-response';

@Injectable()
export class SallerService {

  constructor(
    @InjectModel(SallerModel) private readonly sallerModel: typeof SallerModel
  ) { }


  async create(createSallerDto: CreateSallerDto): Promise<IResponse> {
    const existsEmail = await this.sallerModel.findOne({
      where: { email: createSallerDto.email },
    });
    if (existsEmail) {
      throw new ConflictException('Email already exists');
    }
    const newSaller = await this.sallerModel.create(createSallerDto);
    return getSuccessResponse(newSaller, 201);
  }

  async findAll(): Promise<IResponse> {
    const salllers = await this.sallerModel.findAll({ include: { all: true } });
    return getSuccessResponse(salllers);
  }

  async findOne(id: number): Promise<IResponse> {
    const saller = await this.sallerModel.findByPk(id, { include: { all: true } });
    if (!saller) {
      throw new NotFoundException('Saller not found');
    }
    return getSuccessResponse(saller);
  }

  async update(
    id: number,
    updateSallerDto: UpdateSallerDto,
  ): Promise<IResponse> {
    if (updateSallerDto.email) {
      const existsEmail = await this.sallerModel.findOne({
        where: { email: updateSallerDto.email },
      });
      if (existsEmail && existsEmail?.id != id) {
        throw new ConflictException('Email already exists');
      }
    }
    const author = await this.sallerModel.update(updateSallerDto, {
      where: { id },
      returning: true,
    });
    if (author[0] === 0) {
      throw new NotFoundException('Author not found');
    }
    return getSuccessResponse(author[1][0]);
  }

  async remove(id: number): Promise<IResponse> {
    const saller = await this.sallerModel.destroy({ where: { id } });
    if (!saller) {
      throw new NotFoundException('Saller not found');
    }
    return getSuccessResponse({});
  }
}
