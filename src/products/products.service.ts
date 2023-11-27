import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private readonly productsModel: Model<IProduct>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<any> {
    try {
      const product = new this.productsModel(createProductDto);
      return await product.save();
    } catch (error) {
      console.log(error ,"ERRR")
      throw error
    }
  }

  findAll() {
    return this.productsModel.find({});
  }

  async findOne(id: number) {
    return await this.productsModel.findOne({
      id
    }) ?? {};
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
