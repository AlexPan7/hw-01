import React, { useState } from 'react';
import styles from './PostItem.module.scss';
import data from './data.json';

const PostItem = () => {
  const [posts] = useState(data);

  return (
    posts.map(({image, time, title, descr}, i) => {
      return <li key={i} className={styles.postItem}>
        <a href="#">
          <div className={styles.image}>
            <img src={image} alt="image description" />
          </div>
          <div className={styles.descr}>
            <span className={styles.badge}>{time}</span>
            <h3 className={styles.title}>{title}</h3>
            <p>{descr}</p>
          </div>
        </a>
      </li>
    })
  )
}

export default PostItem