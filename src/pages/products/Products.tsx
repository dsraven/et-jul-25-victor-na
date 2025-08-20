import { useNavigate } from 'react-router';
import type { Product } from '../../api/hooks/products/productMapper';
import useProducts from '../../api/hooks/products/useProducts';
import { Table, type ColumnType } from '../../components/Table';
import classes from './Products.module.css';

const Products = () => {
  const navigate = useNavigate();
  const { data } = useProducts();
  const columns: ColumnType<Product>[] = [
    {
      name: 'id',
    },
    {
      name: 'thumbnail',
      render: (value) => {
        return <img src={value as string} className={classes['row-image']} />;
      },
    },
    {
      name: 'title',
    },
    {
      name: 'description',
    },
    {
      name: 'price',
    },
  ];
  const goToDetailPage = (row: Product) => {
    navigate(`/products/${row.id}`);
  };

  return <Table columns={columns} dataSource={data} onRowClick={(row) => goToDetailPage(row)} />;
};

export default Products;
