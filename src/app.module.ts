import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    OrderModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(String(process.env.MONGO_URI)),
  ],
})
export class AppModule {}




// git init && git remote add origin <remote-repo-url> &&
//  git remote -v && git add . && git commit -m 'matn' &&
//   git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
