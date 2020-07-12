import React, { memo } from 'react';
import cx from 'classnames';

import { ButtonProps } from './ButtonTypes';

import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  skin = 'primary',
  ...props
}: ButtonProps) => (
  <button
    className={cx(styles.button, className, {
      [styles.secondary]: skin === 'secondary',
    })}
    {...props}
  >
    {children}
  </button>
);

export default memo(Button);
