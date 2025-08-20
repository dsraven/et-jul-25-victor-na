import Menu from './Menu';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <Menu />
    </div>
  );
};

export default Header;
