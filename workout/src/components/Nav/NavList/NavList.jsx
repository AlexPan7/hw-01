import styles from './NavList.module.scss';

const NavList = ({ isOpen, children }) => {
  return (
    <nav className={`${styles.navList} ${isOpen ? styles.navOpened : ''}`}>
      { children }
    </nav>
  )
}

export default NavList