import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Put,
  Res,
  Req,
  Session,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// // import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // supprimer
  @Delete('/:id')
  async delete_users(@Res() response, @Param('id') id) {
    const deletedUsers = await this.usersService.DeleteById(id);
    return response.status(HttpStatus.OK).json({
      deletedUsers,
    });
  }

  // update
  @Put('/:id')
  async update_users(@Res() response, @Param('id') id, @Body() user: User) {
    const updatedUser = await this.usersService.UpdateById(id, user);
    return response.status(HttpStatus.OK).json({
      updatedUser,
    });
  }
  // fonctions Admin seul(creer un user, get all users,get by id)
  // create user
  @Post('register')
  async create_user(
    @Body() user: User,
    @Res() response,
    @Session() session: Record<string, any>,
  ) {
    const createUser = await this.usersService.create(user);

    return response.status(HttpStatus.CREATED).json({
      createUser,
    });
  }
  // get all users

  @Get()
  async getAlluser(@Res() response) {
    const users = await this.usersService.readAll();
    return response.status(HttpStatus.OK).json({
      users,
    });
  }

  // get by id
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const user = await this.usersService.getById(id);
    return response.status(HttpStatus.OK).json({
      user,
    });
  }

  // conecter
  @Post('login')
  async connect(
    @Req() request,
    @Body('email') email,
    @Body('password') password,
    @Res() response,
    @Session() session: Record<string, any>,
  ) {
    const users = await this.usersService.findByemail(email);
    if (!users) {
      return response.json('Email incorrect');
    }
    const ismatching = await bcrypt.compare(password, users.password);
    if (!ismatching) {
      return 'Password incorrect';
    }
    // const data = session.set('user_connect', user._id);
    // return response.json({data})

    return response.status(200).json({
      user_id: users._id,
      token: jwt.sign(
        {
          userId: users._id,
        },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' },
      ),
    });
  }
}
