import type { ProductsDTO } from '../../types/products';

const productMapper = (product: ProductsDTO['products'][number]) => {
  return {
    key: product.id,
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.images[0],
    thumbnail: product.thumbnail,
  };
};

export default productMapper;
export type Product = ReturnType<typeof productMapper>;
