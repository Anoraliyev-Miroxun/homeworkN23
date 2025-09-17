import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule,UserModule, ProductModule, CategoryModule],

})
export class AppModule {}
