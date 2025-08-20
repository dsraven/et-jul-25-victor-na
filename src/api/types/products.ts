export interface ProductsDTO {
  products: ProductDTO[];
}

interface ProductDTO {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
  thumbnail: string;
}
