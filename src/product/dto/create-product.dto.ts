


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
  @IsInt({ each: true })   
  @IsOptional()            
  orderIds?: number[];
}



// git init && git remote add origin <remote-repo-url> &&
//  git remote -v && git add . && git commit -m 'matn' &&
//   git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'

// git add . 
// git commit -m "commit yoz"
// git push origin <branch-nomi>
