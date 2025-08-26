import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateSallerDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}