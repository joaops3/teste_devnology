import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/app/common/decorators/roles.decorator';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Role } from 'src/app/types';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateLinkDto } from './dtos/update-link.dto';
import { LinkService } from './link.service';


@ApiTags('api/link')
@ApiBearerAuth()
@Controller('/api/link')
export class LinkController {
  constructor(private linkService: LinkService) { }

  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/devblog')
  async craw() {
    return await this.linkService.craw();
  }

  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/:id')
  async findOne(@Param('id') _id: string) {
    return await this.linkService.findOne(_id);
  }
  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/:id')
  async update(@Param('id') _id: string, @Body() UpdateLinkDto) {
    return await this.linkService.update(_id, UpdateLinkDto);
  }
}
