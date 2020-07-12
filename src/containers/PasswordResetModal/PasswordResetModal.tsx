import React, { memo } from "react";
import Modal from "react-modal";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { PasswordResetModalProps } from "./PasswordResetModalTypes";

import styles from "./PasswordResetModal.module.scss";

const customStyles = {
  content: {
    padding: 0,
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    bottom: "auto",
    borderRadius: 3,
    border: "none",
    width: 600,
    transform: "translate(-50%, 0)",
  },
  overlay: {
    backgroundColor: "transparent",
  },
};

const PasswordResetModal = ({ isOpen, onClose }: PasswordResetModalProps) => (
  <Modal
    isOpen={isOpen}
    //   onAfterOpen={afterOpenModal}
    shouldCloseOnOverlayClick
    style={customStyles}
    overlayClassName={styles.overlay}
    contentLabel="Example Modal"
  >
    <div className={styles.header}>
      Password Reset <span onClick={onClose} className={styles.close}></span>{" "}
    </div>
    <div className={styles.content}>
      <div>
        Please enter the email address associated with your globaledit account
        to reset your password.
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email address
        </label>
        <Input id="email" type="email" />
      </div>
    </div>
    <div className={styles.footer}>
      <Button className={styles.footerButton}>Submit</Button>
      <Button className={styles.footerButton} skin="secondary">
        Cancel
      </Button>
    </div>
  </Modal>
);

export default memo(PasswordResetModal);
