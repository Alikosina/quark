import React, { memo } from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cx(styles.button, className)} {...props}>
    {children}
  </button>
);

export default memo(Button);
