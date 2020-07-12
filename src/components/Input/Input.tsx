import React, { memo } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cx(styles.input, className)} {...props} />
);

export default memo(Input);
