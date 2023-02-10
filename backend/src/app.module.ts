import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';


import { DbModule } from "./app/db.module";
import { AuthModule } from './app/modules/auth/auth.module';
import { UserModule } from './app/modules/user/user.module';
import { LinkModule } from './app/modules/link/link.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), UserModule,LinkModule, AuthModule, DbModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
