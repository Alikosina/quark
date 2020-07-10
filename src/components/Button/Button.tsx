import React, { InputHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { prependOnceListener } from 'cluster';

const Button = (props: any) => (
  <button className={styles.button}>{props.children}</button>
);

export default Button;
