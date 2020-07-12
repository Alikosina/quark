import React, { memo } from 'react';
import cx from 'classnames';

import styles from './ModalHeader.module.scss';

const ModalHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cx(styles.header, className)} {...props}>
    {children}
  </div>
);

export default memo(ModalHeader);
