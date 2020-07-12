import React, { memo } from "react";
import Modal from "react-modal";
import styles from "./PasswordResetModal.module.scss";

const customStyles = {
  content: {
    padding: 0,
    bottom: "auto",
  },
};

const PasswordResetModal = () => (
  <Modal
    isOpen={false}
    //   onAfterOpen={afterOpenModal}
    //   onRequestClose={closeModal}
    style={customStyles}
    overlayClassName={styles.overlay}
    contentLabel="Example Modal"
  >
    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button> */}
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
