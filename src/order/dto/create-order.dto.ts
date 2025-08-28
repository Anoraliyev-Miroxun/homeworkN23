import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateOrderDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId:string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    nechta:number;
}
