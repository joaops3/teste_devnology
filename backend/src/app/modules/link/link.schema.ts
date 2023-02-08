import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


// export type UserDocument = User & Document;

@Schema()
export class Link  extends Document {

  @Prop()
  title: string
  
  @Prop()
  href: string;

}

export const LinkSchema = SchemaFactory.createForClass(Link);
