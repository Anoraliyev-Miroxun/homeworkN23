import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    soni:number


    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNumber()
    @IsNotEmpty()
    category_id:number


    @IsNumber()
    @IsNotEmpty()
    saller_id:number
    @IsNumber()
    @IsNotEmpty()
    price:number


}
