import React, { memo } from "react";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import styles from "./Login.module.scss";

const Login = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome</h1>
    <div className={styles.description}>Please sign in to continue</div>
    <hr className={styles.line} />
    <img className={styles.logo} src={logo} alt="logo" />
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submit");
      }}
    >
      <div>
        <label className={styles.label} htmlFor="userName">
          Username
        </label>
        <Input id="userName" />
      </div>
      <div>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <PasswordInput id="password" />
      </div>
      <div className={styles.formFooter}>
        <Button type="submit">Sign In</Button>
        <span className={styles.forgotPasswordText}>Forgot password?</span>
      </div>
    </form>
  </div>
);

export default memo(Login);
