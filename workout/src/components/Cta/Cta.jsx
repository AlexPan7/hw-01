import styles from './Cta.module.scss';
import Button from '../Button/Button';

const Cta = () => {
  return (
    <div className={styles.cta}>
      <h3 className={styles.title}>Try us in one click</h3>
      <Button>Free Lesson</Button>
    </div>
  )
}

export default Cta