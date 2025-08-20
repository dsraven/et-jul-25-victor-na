import { Link } from '@mui/material';
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <Link href="/products" color="primary" underline="none">
          Products
        </Link>
      </li>
      <li>
        <Link href="/users" color="primary" underline="none">
          Users
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
