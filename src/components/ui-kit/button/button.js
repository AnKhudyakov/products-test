import * as React from "react"

import * as styles from "./button.module.scss";

const Button = ({ children, ...restProps }) => {

  return (
    <button {...restProps}
      className={styles.btn}
    >
      <div className={styles.wrapper}>
        <div
          className={styles.plus}
        ></div>
      </div>
      {children}
    </button>
  );
};

export default Button;
