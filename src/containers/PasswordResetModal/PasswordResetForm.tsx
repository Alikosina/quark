import React, { memo, useCallback } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalHeader from '../../components/ModalHeader';

import styles from './PasswordResetForm.module.scss';

const PasswordResetForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSubmit();
    },
    [onSubmit]
  );

  return (
    <div>
      <ModalHeader>Password Reset</ModalHeader>
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          <div>
            Please enter the email address associated with your globaledit
            account to reset your password.
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email address
            </label>
            <Input skin="light" id="email" type="email" />
          </div>
        </div>
        <div className={styles.footer}>
          <Button type="submit" className={styles.footerButton}>
            Submit
          </Button>
          <Button className={styles.footerButton} skin="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default memo(PasswordResetForm);
