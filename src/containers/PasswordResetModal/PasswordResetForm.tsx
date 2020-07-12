import React, { memo } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalHeader from '../../components/ModalHeader';

import styles from './PasswordResetForm.module.scss';

const PasswordResetForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <div>
      <ModalHeader>Password Reset</ModalHeader>
      <div className={styles.content}>
        <div>
          Please enter the email address associated with your globaledit account
          to reset your password.
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email address
          </label>
          <Input skin="light" id="email" type="email" />
        </div>
      </div>
      <div className={styles.footer}>
        <Button onClick={onSubmit} className={styles.footerButton}>
          Submit
        </Button>
        <Button className={styles.footerButton} skin="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default memo(PasswordResetForm);
