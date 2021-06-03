import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.schema';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAllCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }
}
