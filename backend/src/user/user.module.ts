// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';

// @Module({
//   providers: [UserService],
//   controllers: [UserController]
// })
// export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
console.log('user:', User);

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Import and include UserRepository here
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
