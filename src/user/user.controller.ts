import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user';


@Controller("users")
export class UserController {

    constructor(private readonly UserService: UserService) { }

    @Post()
    async create(@Body() userData: CreateUserDto) {
        return this.UserService.create(userData);
    }

    @Get()
    async getAll() {
        return this.UserService.getAll();
    }

    @Get("/:id")
    async getById(@Param("id") id: string) {
        return this.UserService.getById(+id)
    }

    @Patch("/:id")
    async update(@Param("id") id: string,@Body() userData:UpdateUserDto) {
        return this.UserService.update(+id,userData)
    }

    @Delete("/:id")
    async delete(@Param("id") id: string) {
        return this.UserService.delete(+id);
    }

}
