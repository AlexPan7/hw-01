import styles from './PostList.module.scss';

const PostList = ({ children }) => {
  return <ul className={styles.postList}>{ children }</ul>
}

export default PostList