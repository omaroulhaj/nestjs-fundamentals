import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { v4 as uuid } from "uuid";


@Injectable()
export class UserService {
    private users:UserEntity[]=[]

    findUsers():UserEntity[]{
        return this.users;
    }

    findUserById(id:string):UserEntity{
        const user: UserEntity= this.users.find((user:UserEntity)=>user.id==id);
        return user;
    }

    creatUser(createUserDto:CreateUserDto):UserEntity{
        const newUser : UserEntity={
            ...createUserDto,
            id: uuid(),
        }
        this.users.push(newUser);    
        return newUser;
    }
    updateUser(id:string,updateUserDto:UpdateUserDto):UserEntity{
        const index=this.users.findIndex((user:UserEntity)=>user.id==id); 
        this.users[index]={
            ...this.users[index],
            ...UpdateUserDto,
        };
        return this.users[index];
    }
    deleteUser(id:string):void{
        this.users=this.users.filter((user:UserEntity)=>user.id !=id)

    }
}


