import React, { memo } from "react";
import cx from "classnames";

import { FooterItemProps } from "./FooterItemTypes";

import styles from "./FooterItem.module.scss";

const FooterItem = ({ title, date, text, className }: FooterItemProps) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.date}>{date}</div>
    <div className={styles.text}>{text}</div>
  </div>
);

export default memo(FooterItem);
