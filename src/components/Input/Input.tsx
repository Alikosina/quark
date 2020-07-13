import React, { memo } from "react";
import cx from "classnames";

import { InputProps } from "./InputTypes";

import styles from "./Input.module.scss";

const Input = ({ className, skin = "dark", ...props }: InputProps) => (
  <input className={cx(styles.input, className, styles[skin])} {...props} />
);

export default memo(Input);
