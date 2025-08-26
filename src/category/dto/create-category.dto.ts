import { IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name:string;
}
