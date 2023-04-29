import styles from './SectionMoreLink.module.scss';

const SectionMoreLink = ({children}) => {
  return <a className={styles.link} href="#">{children}</a>
}

export default SectionMoreLink