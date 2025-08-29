import { Module } from '@nestjs/common';
import { MijozService } from './mijoz.service';
import { MijozController } from './mijoz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mijoz } from './entities/mijoz.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mijoz])],
  controllers: [MijozController],
  providers: [MijozService],
})
export class MijozModule {}
