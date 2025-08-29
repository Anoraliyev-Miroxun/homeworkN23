import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsNotEmpty, IsNumber } from "class-validator";




export class CreateOrderDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    soni: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    mijozId: number;

    @ApiProperty()
    @IsArray()
    @IsInt({ each: true }) // har bitta element int bo'lishi kerak
    productIds: number[];
}
