import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  password: string;

  @Prop()
  salt: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  gender: string;

  @Prop()
  picture: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
