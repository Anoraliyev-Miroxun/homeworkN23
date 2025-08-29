


import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min, IsArray, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  narxi: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  umumiysoni: number;

  @ApiProperty()
  @IsArray()
  @IsInt({ each: true })   // array ichidagi har bir qiymat int bo‘lishi shart
  @IsOptional()            // product yaratishda orderIds majburiy bo‘lmasligi mumkin
  orderIds?: number[];
}



// git init && git remote add origin <remote-repo-url> &&
//  git remote -v && git add . && git commit -m 'matn' &&
//   git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
