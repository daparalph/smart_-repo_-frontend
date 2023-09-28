import React from 'react';
import { ImSpinner } from 'react-icons/im';
import styles from './styles/nav.module.scss';

const Loading = () => (
  <div className={`${styles.loader}`}>
    <ImSpinner className={`${styles.spinner}`} />
    <p className={`${styles.h2}`}>Checking... if it takes longer, you may try again.</p>
  </div>
);

export default Loading;