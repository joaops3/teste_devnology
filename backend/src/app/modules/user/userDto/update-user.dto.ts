import {ApiProperty, PartialType} from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {


  @ApiProperty({ description: "email", example: "email@gmail.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

}
