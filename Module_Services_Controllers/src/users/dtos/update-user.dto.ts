// export class UpdateUserDto{
//     username?:string;
//     email?:string;
//     password?:string;
//     // password?:string; optionnal

import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

    
// }
// npm i @nestjs/mapped-types عوض ما تعيد ما فوق يمكنك استعمال هذه الحزمة
export class UpdateUserDto extends PartialType(CreateUserDto){}