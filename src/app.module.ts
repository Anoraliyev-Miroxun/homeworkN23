import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WordsModule } from './words/words.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, WordsModule,PrismaModule]
})
export class AppModule {}
