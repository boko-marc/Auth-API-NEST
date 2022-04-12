import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../users/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt')
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  // lors de la création je hash le mot de passe automatiquement

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new this.UserModel({
      ...user,
      password: hashedPassword,
    });
    return newUser.save();
  }

  // get all
  async readAll(): Promise<User[]> {
    return await this.UserModel.find().exec();
  }

  // get by id
  async getById(id: string): Promise<User> {
    return await this.UserModel.findById(id).exec();
  }
  // update by id et hash mot de passe

  async UpdateById(id: string, user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return await this.UserModel.findByIdAndUpdate(
      id,
      { ...user, password: hashedPassword },
      { new: true },
    );
  }

  // delete by id

  async DeleteById(id: string): Promise<any> {
    return await this.UserModel.findByIdAndRemove(id);
  }

  // get by email
  async findByemail(email: string): Promise<User> {
    const user = await this.UserModel.findOne({ email });
    return user;
  }
}
