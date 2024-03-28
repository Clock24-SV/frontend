import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ClearButton = () => {
  return <button className={cx("button")}>완료</button>;
};

export default ClearButton;
