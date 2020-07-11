import React, { memo, useState, useCallback, useMemo } from "react";
import Input from "../Input/Input";
import classnames from "classnames";
import styles from "./PasswordInput.module.scss";

const PasswordInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isShown, setIsShown] = useState(false);

  const { asideText, inputType } = useMemo(
    () => ({
      asideText: isShown ? "Hide" : "Show",
      inputType: isShown ? "text" : "password",
    }),
    [isShown]
  );

  const handleAsideTextClick = useCallback(() => setIsShown(!isShown), [
    isShown,
    setIsShown,
  ]);

  return (
    <div className={styles.container}>
      <span onClick={handleAsideTextClick} className={styles.asideText}>
        {asideText}
      </span>
      <Input
        className={classnames(styles.input, className)}
        type={inputType}
        {...props}
      />
    </div>
  );
};

export default memo(PasswordInput);
