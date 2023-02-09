import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { UpdateLinkDto } from "./dtos/update-link.dto";
import { LinkService } from "./link.service";


@Controller("/api/link")
export class LinkController {
    constructor(private linkService: LinkService){}

    @Get('/:id')
    async findOne(@Param('id') _id: string){
        return await this.linkService.findOne(_id)
    }

    @Put("/:id")
    async update(@Param('id') _id: string, @Body() UpdateLinkDto){
        return await this.linkService.update(_id, UpdateLinkDto)
    }
}