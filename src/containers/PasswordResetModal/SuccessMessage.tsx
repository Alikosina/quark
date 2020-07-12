import React, { memo } from 'react';

import ModalHeader from '../../components/ModalHeader';

import styles from './SuccessMessage.module.scss';

const SuccessMessage = () => {
  return (
    <div>
      <ModalHeader>Email Sent</ModalHeader>
      <div className={styles.content}>
        <div>
          Thank you, instructions to reset your password have been e-mailed to
          the address you provided!
        </div>
      </div>
    </div>
  );
};

export default memo(SuccessMessage);
