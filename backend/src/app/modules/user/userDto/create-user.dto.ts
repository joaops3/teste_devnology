import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty, IsString, Length } from "class-validator";
import { Role } from "../../../types"

export class CreateUserDto {

  @ApiProperty({ description: "nome", example: "joao" })
  @IsString()
  @Length(1, 150)
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: "email", example: "email@gmail.com" })
  @IsEmail()
  @Length(1, 150)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: "password", example: "123" })
  @IsString()
  @Length(1, 150)
  @IsNotEmpty()
  password: string;

}