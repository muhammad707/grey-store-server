import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  category: string;
}
