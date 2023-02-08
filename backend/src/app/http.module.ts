import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { DbModule } from "./db.module";


@Module({
  imports: [UserModule, AuthModule, DbModule],
  providers: [],
})
export class HttpModule {}
