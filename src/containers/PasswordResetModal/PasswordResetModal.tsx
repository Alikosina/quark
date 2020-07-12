import React, { memo, useState, useCallback } from 'react';
import Modal from 'react-modal';

import { PasswordResetModalProps } from './PasswordResetModalTypes';

import PasswordResetForm from './PasswordResetForm';
import SuccessMessage from './SuccessMessage';

import styles from './PasswordResetModal.module.scss';

const customStyles = {
  content: {
    padding: 0,
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    bottom: 'auto',
    borderRadius: 3,
    border: 'none',
    width: 600,
    transform: 'translate(-50%, 0)',
  },
  overlay: {
    backgroundColor: 'transparent',
  },
};

const PasswordResetModal = ({ isOpen, onClose }: PasswordResetModalProps) => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = useCallback(() => setIsSent(true), [setIsSent]);
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <span onClick={onClose} className={styles.close}></span>
        {isSent ? (
          <SuccessMessage />
        ) : (
          <PasswordResetForm onSubmit={handleSubmit} />
        )}
      </div>
    </Modal>
  );
};

export default memo(PasswordResetModal);
