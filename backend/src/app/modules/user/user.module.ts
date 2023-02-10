import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { LinkService } from '../link/link.service';
import { Link, LinkSchema } from '../link/link.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },{name: Link.name, schema: LinkSchema}
    ]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    LinkService,
  ],
  exports: [UserService],
})
export class UserModule {}
