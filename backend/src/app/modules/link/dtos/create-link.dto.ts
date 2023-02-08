import { IsString,IsNotEmpty } from "class-validator";

export class CreateLinkDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    href: string
}