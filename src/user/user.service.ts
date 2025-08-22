import { UserCreateDto } from "./dto/create-user";
import { IUser } from "./entity/user-entity";
import {v4} from 'uuid';
import { Injectable, NotFoundException } from "@nestjs/common";
import { UserUpdateDto } from "./dto/update-user";


@Injectable()
export class UserService{

    users:IUser[]=[]
    async create(UserCreateDto:UserCreateDto){
        const newUser={id:v4(),...UserCreateDto}
        this.users.push(newUser)
        return newUser
    }


    async getAll(){
        const users=this.users;
        if(!users){
            throw new NotFoundException("data baza bosh");
        }
        return users
    }


    async getById(id:string){
        const user= this.users.find(v=>v.id)
        if(!user){
            throw new NotFoundException();
        }

        return user
    }

    async update(id:string,UserUpdateDto:UserUpdateDto){
        const index=this.users.findIndex(v=>v.id===id)
        if(!index){
            throw new NotFoundException();
        }
        this.users[index]={...UserUpdateDto,...this.users[index]};
        return this.users[index];
    }

    async remove(id:string){
        const index=this.users.findIndex(v=>v.id===id)
        if(!index){
            throw new NotFoundException();
        }

        this.users.splice(index,1);
        return {}
    }
}





git init && git remote add origin <remote-repo-url> &&
 git remote -v && git add . && git commit -m 'matn' &&
  git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
