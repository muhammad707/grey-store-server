import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crown'),
    ProductModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
