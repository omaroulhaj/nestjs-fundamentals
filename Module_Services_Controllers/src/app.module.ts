import { Module } from '@nestjs/common';
import {UserModule} from './users/users.module';
import { UserService } from './users/users.service';

@Module({
    imports :[UserModule],
    providers: [UserService],
})
export class AppModule{

}