import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateMijozDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email:string;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age?:number;

}
