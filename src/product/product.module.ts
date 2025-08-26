import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModel } from './models/product.model';
import { CategoryModel } from 'src/category/models/category.model';
import { SallerModel } from 'src/saller/models/saller.model';
import { CategoryModule } from 'src/category/category.module';
import { SallerModule } from 'src/saller/saller.module';

@Module({
  imports:[SequelizeModule.forFeature([ProductModel]),CategoryModule,SallerModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService]
})
export class ProductModule {}
