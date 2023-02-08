import {PartialType} from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {

  @IsEmail()
  @IsNotEmpty()
  email: string;

}
