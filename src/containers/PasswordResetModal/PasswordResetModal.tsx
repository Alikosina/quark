import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  sendEmailRequest,
  setInitialState,
} from "../../store/resetPassword/resetPasswordActions";

import Modal from "react-modal";

import { PasswordResetModalProps } from "./PasswordResetModalTypes";

import PasswordResetForm from "./PasswordResetForm";
import SuccessMessage from "./SuccessMessage";

import styles from "./PasswordResetModal.module.scss";
import { StoreModel } from "../../models/storeModel";

const customStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
};

const PasswordResetModal = ({ isOpen, onClose }: PasswordResetModalProps) => {
  const dispatch = useDispatch();

  const { isSent } = useSelector(
    (state: StoreModel) => state.resetPassword.data
  );

  const handleSubmit = useCallback(
    (email: string) => {
      dispatch(sendEmailRequest(email));
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    dispatch(setInitialState());
    onClose();
  }, [onClose, dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      className={styles.content}
      style={customStyles}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <span onClick={handleClose} className={styles.close}></span>
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
