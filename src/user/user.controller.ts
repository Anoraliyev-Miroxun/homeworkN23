import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/create-user";
import { UserUpdateDto } from "./dto/update-user";


@Controller("users")
export class UserController{
    constructor(private readonly UserService:UserService){}
    @Post()
    create(@Body() UserCreateDto:UserCreateDto){
        return this.UserService.create(UserCreateDto)
    }

    @Get()
    findAll(){
        return this.UserService.getAll()
    }

    @Get("/:id")
    findById(@Param("id") id:string){
        return this.UserService.getById(id)
    }

    @Patch("/:id")
    update(@Param("id") id:string,@Body() UserUpdateDto:UserUpdateDto){
        return this.UserService.update(id,UserUpdateDto)
    }

    @Delete("/:id")
    delete(@Param("id") id:string){
        return this.UserService.remove(id) 
    }

}