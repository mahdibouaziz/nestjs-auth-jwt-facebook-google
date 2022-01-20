import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  salt: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  gender: string;

  @Prop()
  picture: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
