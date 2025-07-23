import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    public userRepository: Repository<User>,
  ) {}

  public async create(user: Partial<User>): Promise<User> {
    return await this.userRepository.save(user);
  }
  public async getUser(user: User): Promise<User> {
    return user;
  }
}
