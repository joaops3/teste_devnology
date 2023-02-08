import { IsString,IsNotEmpty } from "class-validator";

export class CreateLinkDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    label: string

    @IsString()
    @IsNotEmpty()
    href: string
}