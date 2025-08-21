import { Module } from '@nestjs/common';
import {UserModel} from './user/user.module';

@Module({
  imports: [UserModel]
})
export class AppModule {}
