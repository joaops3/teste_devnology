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

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.USER)
  @Get('/:id')
  findOne(@Param("id") _id: string) {
    return this.userService.findOne({_id});
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param("id") _id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.userService.update(_id, updateUserDto);
    return user;
  }

  @Post('/')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Post('/:id/addlink')
  async addlinkToUser(@Param('id') _id: string, createLinkDto: CreateLinkDto){
    return await this.userService.addLink(_id, createLinkDto)
  }

  @Post('/:id/removelink/:linkId')
  async removelinkFromUser(@Param() {_id, linkId}: {_id: string, linkId: string}, createLinkDto: CreateLinkDto){
    return await this.userService.removeLink(_id, linkId)
  }

 

}
