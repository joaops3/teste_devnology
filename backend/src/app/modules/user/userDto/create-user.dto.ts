import { IsEmpty, IsNotEmpty, IsString, Length } from "class-validator";
import { Role } from "../../../types"

export class CreateUserDto {

  @IsString()
  @Length(1, 150)
  @IsNotEmpty()
  name: string

  @IsString()
  @Length(1, 150)
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(1, 150)
  @IsNotEmpty()
  password: string;

}