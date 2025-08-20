import type { ProductsDTO } from '../types/products';

export const getProducts = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    return res.json() as Promise<ProductsDTO>;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProduct = async (id: string | undefined) => {
  try {
    if (!id) return undefined;
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    return res.json() as Promise<ProductsDTO['products'][number]>;
  } catch (error) {
    console.error(error);
    return null;
  }
};
