import React, { memo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { signInRequest } from "../../store/login/loginActions";

import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import PasswordResetModal from "../PasswordResetModal";
import FooterItem from "../../components/FooterItem";

import logo from "../../assets/images/logo.svg";

import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleForgotPasswordClick = useCallback(() => setIsModalOpen(true), [
    setIsModalOpen,
  ]);

  const handleModalClose = useCallback(() => setIsModalOpen(false), [
    setIsModalOpen,
  ]);

  const handleUserNameChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setUserName(event.currentTarget.value),
    [setUserName]
  );

  const handlePasswordChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setPassword(event.currentTarget.value),
    [setPassword]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch(
        signInRequest({
          userName,
          password,
        })
      );
    },
    [userName, password, dispatch]
  );

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome</h1>
        <div className={styles.description}>Please sign in to continue</div>
        <hr className={styles.line} />
        <img className={styles.logo} src={logo} alt="logo" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="userName">
              Username
            </label>
            <Input
              value={userName}
              onChange={handleUserNameChange}
              id="userName"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              id="password"
            />
          </div>
          <div className={styles.formFooter}>
            <Button type="submit">Sign In</Button>
            <span
              onClick={handleForgotPasswordClick}
              className={styles.forgotPasswordText}
            >
              Forgot password?
            </span>
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
      <PasswordResetModal onClose={handleModalClose} isOpen={isModalOpen} />
    </>
  );
};

export default memo(Login);
