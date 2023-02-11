import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty } from "class-validator";

export class CreateLinkDto {

    @ApiProperty({ description: "link title", example: "random title" })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({ description: "href", example: "https://google.com" })
    @IsString()
    @IsNotEmpty()
    href: string
}