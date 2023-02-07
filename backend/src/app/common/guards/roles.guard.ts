import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from "@nestjs/jwt";
import { Role } from "src/@types";
import {verify} from "jsonwebtoken"
export const ROLES_KEY = 'roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
   
      const requiredRoles = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      
       const request = context.switchToHttp().getRequest();
       try{
         let token = request.headers.authorization.split(" ")[1]
         let decodedUser: any = verify(token, process.env.JWT_SECRET)
         if(decodedUser.role === requiredRoles) return true
       }catch(e){
        return false
       }
  }
}
