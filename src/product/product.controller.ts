import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }
}
