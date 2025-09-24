import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver
  }), UsersModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}