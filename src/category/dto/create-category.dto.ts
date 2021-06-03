import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  linkUrl: string;

  size: string;
}
