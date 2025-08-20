import { getProduct } from '../../requests/products';
import { useFetch } from '../useFetch';
import productMapper from './productMapper';

const useProduct = (id: string | undefined) => {
  const res = useFetch(() => getProduct(id));
  const data = res.data && productMapper(res.data);
  return { ...res, data };
};

export default useProduct;
