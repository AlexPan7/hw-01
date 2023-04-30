import styles from './NavItem.module.scss';

const NavItem = ({children}) => {
  const {navItem} = styles;

  return <a href="#" className={navItem}>{children}</a>
}

export default NavItem