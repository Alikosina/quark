import React, { memo } from "react";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import styles from "./Login.module.scss";

const Login = () => (
  <div className={styles.container}>
    Login
    <div>
      <Input />
    </div>
    <div>
      <PasswordInput />
    </div>
  </div>
);

export default memo(Login);
