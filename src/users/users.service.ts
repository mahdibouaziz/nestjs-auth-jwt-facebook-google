import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
// import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: string) {
    return await this.userModel.remove({ _id: id });
  }
}
