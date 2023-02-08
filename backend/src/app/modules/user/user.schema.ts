import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Mongoose } from 'mongoose';
import { Role } from 'src/app/types/role.enum';
import { Link } from '../link/link.schema';


export type UserDocument = User & Document;

@Schema()
export class User extends Document {

  @Prop()
  name: string

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop([{type: mongoose.Schema.Types.ObjectId, ref: Link.name}])
  link: Link[]

  @Prop({ default: Role.USER })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
