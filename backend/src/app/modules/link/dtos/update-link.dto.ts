import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/userDto/create-user.dto";


export class UpdateLinkDto extends PartialType(CreateUserDto){}