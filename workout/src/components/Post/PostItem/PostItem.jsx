import styles from './PostItem.module.scss';

const PostItem = ({post}) => {
  const {postItem, postImage, postDescr, badge, postTitle} = styles;
  const {image, time, title, descr} = post;
  
  return (
    <li className={postItem}>
      <a href="#">
        <div className={postImage}>
          <img src={image} alt="image description" />
        </div>
        <div className={postDescr}>
          <span className={badge}>{time}</span>
          <h3 className={postTitle}>{title}</h3>
          <p>{descr}</p>
        </div>
      </a>
    </li>
  )
}

export default PostItem