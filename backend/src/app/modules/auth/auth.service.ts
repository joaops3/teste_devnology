import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as dayjs from 'dayjs';
import { User } from '../user/user.schema';
import * as bcrypt from "bcrypt"


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    
    private jwtService: JwtService,
  ) {}

  async validadeUser(email: string, password: string) {

    const user = await this.userService.findOne({ email });
    if(!user) throw new NotFoundException("email is invalid")
    const validation = await bcrypt.compare(password, user.password);
    if (!validation) {
      throw new HttpException('password invalid', 401);
    }
    return user;
  }

  async login(email: string, password: string) {
    if(!email || !password){
      throw new BadRequestException("email and password required")
    }
    const user = await this.validadeUser(email, password);
    let payload = { username: user.email, sub: user._id, role: user.role };
    const token = await this.jwtService.sign(payload, { expiresIn: '1h' });
    return { id: user._id, name: user.name, token: token };
  }

  
}
