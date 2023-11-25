import { IsEmail, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    readonly username:string;
    @IsEmail()
    readonly email:string;
    @IsString()
    readonly password:string; 
    @IsString()
    readonly country:string; 
    // password?:string; optional there is not here Business logic
    
}