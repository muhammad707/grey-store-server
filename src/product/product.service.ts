import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }
}
