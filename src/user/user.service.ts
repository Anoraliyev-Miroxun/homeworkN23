import { Injectable } from "@nestjs/common";
import {CreateUserDto} from './dto/create-user';
import {IUser} from './entity/user.entity';
import { UpdateUserDto } from "./dto/update-user";
import { UserModel } from "./user.module";

@Injectable()
export class UserService{
    users:IUser[]=[]
    async create(malumoatUser:CreateUserDto){
        this.users.push(malumoatUser)
        return this.users
    }

    async getAll(){
        return this.users
    }

    async getById(id:number){
       return  this.users.find(v=>v.id===id);
    }

    async update(id:number,malumoatUser:UpdateUserDto){
        console.log(malumoatUser);
        const index=this.users.findIndex(v=>v.id===id);



        this.users[index]={
            ...this.users[index],
            ...malumoatUser
        }

        return this.users[index];
    }


    async delete(id:number){
        this.users.forEach((v,i,a) => {
            if(v["id"]===id){
                this.users.splice(i,1);
                return {}
            }
        });
    }
}








// git init && git remote add origin <remote-repo-url> &&
//  git remote -v && git add . && git commit -m 'matn' &&
//   git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
