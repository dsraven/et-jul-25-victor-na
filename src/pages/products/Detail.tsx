import { Paper } from '@mui/material';
import { useParams } from 'react-router';
import classes from './Detail.module.css';
import useProduct from '../../api/hooks/products/useProduct';

const Detail = () => {
  const params = useParams();
  const { data } = useProduct(params.id);
  return (
    <Paper>
      <div className={classes.container}>
        <div>
          <img src={data?.image} alt={data?.title} className={classes['detail-image']} />
        </div>
        <div>
          <h1>{data?.title}</h1>
          <p className={classes.subtitle}>{data?.price}€</p>
          <p>{data?.category.toLocaleUpperCase()}</p>
          <p>{data?.description}</p>
        </div>
      </div>
    </Paper>
  );
};

export default Detail;
