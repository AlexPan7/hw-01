import styles from './NavItem.module.scss';

const NavItem = ({children}) => {
  return <a href="#" className={styles.navItem}>{children}</a>
}

export default NavItem