import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  UseGuards,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/app/common/decorators/roles.decorator';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Role } from 'src/app/types';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateLinkDto } from '../link/dtos/create-link.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './userDto/create-user.dto';
import { UpdateUserDto } from './userDto/update-user.dto';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}
  
  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/')
  async findAll() {
    return await this.userService.findAll();
  }

  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/:id')
  async findOne(@Param("id") _id: string) {
    const user = await this.userService.findOne({_id});
    return {data: {_id: user._id, email: user.email, name: user.name, link: user.link  }}
  }

  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  update(@Param("id") _id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.userService.update(_id, updateUserDto);
    return user;
  }

  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return {data: {_id: user._id}}
  }


  @Delete("/:id")
  async deleteUser(@Param('id') _id: string){
     return await this.userService.delete(_id)
  }

  @Put('/:id/addlink')
  async addlinkToUser(@Param('id') _id: string,  @Body()createLinkDto: CreateLinkDto){
    return await this.userService.addLink(_id, createLinkDto)
  }

  @Delete('/:id/removelink/:linkId')
  async removelinkFromUser(@Param() {id, linkId}: {id: string, linkId: string}){
  
    return await this.userService.removeLink(id, linkId)
  }

 

}
