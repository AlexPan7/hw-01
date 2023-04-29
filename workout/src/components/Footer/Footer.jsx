import styles from './Footer.module.scss';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.info}>
        <address className={styles.address}>150 52nd Street, Brooklyn NY 11232 </address>
        <p className={styles.copy}>&copy; by WORKOUT in 2023.</p>
      </div>
    </footer>
  )
}

export default Footer