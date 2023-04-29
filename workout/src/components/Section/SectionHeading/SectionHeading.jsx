import styles from './SectionHeading.module.scss';

const SectionHeading = ({children}) => {
  return <header className={styles.heading}>{children}</header>
}

export default SectionHeading