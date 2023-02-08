import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLinkDto } from "./dtos/create-link.dto";
import { UpdateLinkDto } from "./dtos/update-link.dto";
import { Link } from "./link.schema";

@Injectable()
export class LinkService {
    constructor(@InjectModel(Link.name) private LinkModel: Model<Link>){}


    async create(createLinkDto: CreateLinkDto): Promise<Link>{
        const link = await new this.LinkModel(createLinkDto)
        if(!link) throw new BadRequestException()
        await link.save()
        return link
    }

    async findOne(_id: string): Promise<Link> {
        return await this.LinkModel.findOne({_id})
    }

    async update(_id: string, updateLinkDto: UpdateLinkDto): Promise<void> {
        await this.LinkModel.findOneAndUpdate({_id}, {$set: updateLinkDto}).catch(e => {
            throw new BadRequestException()
        })
    }

    async delete(_id: string): Promise<void> {
        await this.LinkModel.deleteOne({_id}).catch(e => {
            throw new BadRequestException(e)
        })
    }
}