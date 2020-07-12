import React, { memo } from "react";
import Modal from "react-modal";

import { PasswordResetModalProps } from "./PasswordResetModalTypes";

import styles from "./PasswordResetModal.module.scss";

const customStyles = {
  content: {
    padding: 0,
    bottom: "auto",
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
    <button onClick={onClose}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>
);

export default memo(PasswordResetModal);
