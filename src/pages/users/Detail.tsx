import { Paper } from '@mui/material';
import { useParams } from 'react-router';
import classes from './Detail.module.css';
import useUser from '../../api/hooks/users/useUser';

const Detail = () => {
  const params = useParams();
  const { data } = useUser(params.id);
  return (
    <Paper>
      <div className={classes.container}>
        <div>
          <h1>
            {data?.name} {data?.lastName}
          </h1>
          <p className={classes.subtitle}>{data?.username}</p>
          <p>Role: {data?.role}</p>
          <p>Email: {data?.email}</p>
        </div>
      </div>
    </Paper>
  );
};

export default Detail;
