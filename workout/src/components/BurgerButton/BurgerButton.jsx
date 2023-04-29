import styles from './BurgerButton.module.scss';

const BurgerButton = ({isOpen, onClick}) => {
  return (
    <button onClick={onClick} className={`${styles.burgerBtn} ${isOpen ? styles.opened : ''}`}>
      <span>menu</span>
    </button>
  )
}

export default BurgerButton