import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty()
    price:true; 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    soni:number;

    @ApiProperty()
    @IsMongoId()
    @IsNotEmpty()
    categoryId:string
}

