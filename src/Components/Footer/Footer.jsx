import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.heading}>Connect with me</div>
      <ul className={styles.socialLinks}>
        <li className={styles.listItemInline}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/avadhesh-chauhan-34423a16a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.listItemInline}>
          <a
            className={styles.link}
            href="https://github.com/avadheshchauhan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={styles.listItemInline}>
          <a
            className={styles.link}
            href="https://twitter.com/avadheshchauha7"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={styles.listItemInline}>
          <a
            className={styles.link}
            href="https://www.instagram.com/im_avadhesh7/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
