import React, { memo } from "react";

import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import PasswordResetModal from "./PasswordResetModal";
import FooterItem from "../../components/FooterItem";

import logo from "../../assets/images/logo.svg";

import styles from "./Login.module.scss";

// Modal.setAppElement("#App");

const Login = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <div className={styles.description}>Please sign in to continue</div>
      <hr className={styles.line} />
      <img className={styles.logo} src={logo} alt="logo" />
      <form
        className={styles.form}
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
      <hr className={styles.line} />
      <div className={styles.footer}>
        <div>
          <FooterItem
            title="LATEST BLOG POST"
            date="October 15, 2018"
            text="Create Efficiency with a Creative Asset Management Platform"
          />
        </div>
        <div>
          <FooterItem
            title="RECENT TWEET"
            date="April 15, 2018"
            text="#HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…"
          />
        </div>
      </div>
    </div>
    <PasswordResetModal />
  </>
);

export default memo(Login);
