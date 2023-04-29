import styles from './SectionItem.module.scss';

const SectionItem = ({ children }) => {
  return <section className={styles.section}>{ children }</section>
}

export default SectionItem