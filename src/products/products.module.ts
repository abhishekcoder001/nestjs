import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productsSchema } from './schemas/products.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'products',
        schema:productsSchema,
      }
    ])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ProductsService]
})
export class ProductsModule {}
