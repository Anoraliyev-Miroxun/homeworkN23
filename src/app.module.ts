import { Module } from '@nestjs/common';
import { MijozModule } from './mijoz/mijoz.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';
import { Order } from './order/entities/order.entity';
import { Mijoz } from './mijoz/entities/mijoz.entity';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:".env",isGlobal:true}),
    TypeOrmModule.forRoot({
      type:"postgres",
      url:String(process.env.DB_URI),
      synchronize:true,
      autoLoadEntities:true,
      entities:[Product,Order,Mijoz,Category]
    }),
    ProductModule,
    OrderModule,
    MijozModule,
    CategoryModule
  ],

})
export class AppModule {}
