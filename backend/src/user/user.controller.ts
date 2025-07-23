import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { RequiredPipe } from 'src/pipes/required.pipe';
import { OwnerInterceptor } from 'src/interceptors/owner.interceptor';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Post()
  public async create(
    @Body(new RequiredPipe(['username', 'password']))
    user: User,
  ): Promise<User> {
    return await this.userService.create(user);
  }

  @Get('/signup')
  public async getUser(user: User): Promise<User> {
    return await this.userService.getUser(user);
  }
}
