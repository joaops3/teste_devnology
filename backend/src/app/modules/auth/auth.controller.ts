import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('api/auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: {email: string, password: string}) {
   return await this.authService.login(body.email, body.password);
    
  
  }

}
