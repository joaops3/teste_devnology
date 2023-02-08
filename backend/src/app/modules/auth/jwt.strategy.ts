import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport/dist";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Role } from "src/app/types";


export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), ignoreExpiration: true, secretOrKey: process.env.JWT_SECRET });
  }

  async validate(payload: {sub: string, username: string, role: Role}){
    return {_id: payload.sub, username: payload.username, role: payload.role };
  }
}