import { Injectable, HttpException, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { User } from './user.schema';
import { CreateUserDto } from './userDto/create-user.dto';
import { UpdateUserDto } from './userDto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from "mongoose"
import { CreateLinkDto } from '../link/dtos/create-link.dto';
import { LinkService } from '../link/link.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private linkService: LinkService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (!createUserDto.email) {
      throw new HttpException('nome obrigatorio', 400);
    }
    if (!createUserDto.email) {
      throw new HttpException('password obrigatorio', 400);
    }
    createUserDto.name = createUserDto.name.toLocaleLowerCase().trim()
    const createdUser = new this.userModel(createUserDto);
    let salt = await bcrypt.genSalt(12);
    let hash = await bcrypt.hash(createdUser.password, salt);

    createdUser.password = hash;
    await createdUser.save();
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().populate('link').exec()
  }


  async findOne(data: {_id?: string, email?: string}): Promise<User> {
    const user = await this.userModel
      .findOne(data).populate('link')
    if (!user) {
      throw new HttpException('user not found', 404);
    }
    return user;
  }

  async update(_id: string, updateUserDto: UpdateUserDto): Promise<void> {
    if (!updateUserDto.email) {
      throw new HttpException('email required', 400);
    }
    const user = await (await this.findOne({_id}))
    
    await this.userModel.updateOne(
      { _id: _id },
      {
        $set: updateUserDto,
      },
    ).catch((e)=> {throw new BadRequestException("Update error: ", e.message)})

  }

  async delete(id: string): Promise<void> {
     await this.userModel.findByIdAndDelete(id).catch(e => {throw new BadRequestException("delete error")})
  }


  async addLink(_id: string, createLinkDto: CreateLinkDto): Promise<void> {
    const user = await this.findOne({_id})
    if(!user) throw new NotFoundException("user not found")

    const newLink = await this.linkService.create(createLinkDto)

    user.link.push(newLink._id)
    await user.save()

    await this.userModel.findOneAndUpdate({_id}, {$set: user})
  }

  async removeLink(_id: string, linkId: string): Promise<void> {
    const user = await this.findOne({_id})
    if(!user) throw new NotFoundException("user not found")

    const link = await this.linkService.findOne(linkId)
    if(!link) throw new NotFoundException("link not found")

    user.link = user.link.filter((item) => item._id !== linkId)
    await user.save()

    await this.userModel.findOneAndUpdate({_id}, {$set: user})
    await this.linkService.delete(linkId)
  }

 
}