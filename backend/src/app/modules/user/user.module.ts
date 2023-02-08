import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { LinkService } from '../link/link.service';
import { Link, LinkSchema } from '../link/link.schema';

@Module({
  imports: [
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
