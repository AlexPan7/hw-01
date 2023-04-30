import styles from './CTA.module.scss';
import Button from '../Button/Button';

const CTA = () => {
  const {cta, title} = styles;

  return (
    <div className={cta}>
      <h3 className={title}>Try us in one click</h3>
      <Button>Free Lesson</Button>
    </div>
  )
}

export default CTA