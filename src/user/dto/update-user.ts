import { PartialType } from "@nestjs/mapped-types";
import { UserCreateDto } from "./create-user";


export class UserUpdateDto extends PartialType(UserCreateDto){}
