import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  title: string;

  @Prop()
  imageUrl: string;

  @Prop()
  linkUrl: string;

  @Prop()
  size: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
