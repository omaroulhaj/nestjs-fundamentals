import {Controller,Get,Post,Delete,Patch,Param, Req, Body, HttpCode, HttpStatus, ParseIntPipe, ParseUUIDPipe, ValidationPipe, UsePipes, Query} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { CustomValidationPipe } from "./Pipes/validation.pipe";
import { UserService } from "./users.service";
// import { Request } from "express";

@Controller("Users")
@UsePipes(ValidationPipe)
export class UsersController{

    constructor(private readonly userService:UserService)
    {

    }


    @Get()
    findUsers(@Query("username",CustomValidationPipe) username : string):UserEntity[]{
        return this.userService.findUsers();
    }
    @Get(":id")
    findUserById(@Param("id",new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.FORBIDDEN}),) id :string):UserEntity{
       return this.userService.findUserById(id);
    }
    @Post()
    creatUser(@Body() createUserDto:CreateUserDto){
        return this.userService.creatUser(createUserDto);
    }
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteUser(@Param("id") id: string){
        this.userService.deleteUser(id);
    }
    @Patch(":id")
    modierone(@Param("id",ParseUUIDPipe) id: string,@Body() UpdateUserDto:UpdateUserDto):UserEntity{
        return this.userService.updateUser(id,UpdateUserDto);
    }
}