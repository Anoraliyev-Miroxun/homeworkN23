import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModel } from './category/models/category.model';
import { ProductModel } from './product/models/product.model';
import { SallerModel } from './saller/models/saller.model';
import { SallerModule } from './saller/saller.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      database: String(process.env.DB_NAME),
      host: String(process.env.DB_HOST),
      username: String(process.env.DB_USER),
      password: String(process.env.DB_PASS),
      port:Number(process.env.DB_PORT),
      logging: false,
      synchronize: true,
      autoLoadModels: true,
      models: [CategoryModel, ProductModel,SallerModel]
    }),
    CategoryModule,
    ProductModule,
    SallerModule

  ],
})
export class AppModule { }
