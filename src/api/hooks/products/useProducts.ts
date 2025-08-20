import { getProducts } from '../../requests/products';
import { useFetch } from '../useFetch';
import productMapper from './productMapper';

const useProducts = () => {
  const res = useFetch(getProducts);
  const data = res.data?.products.map((product) => productMapper(product));
  return { ...res, data };
};

export default useProducts;
