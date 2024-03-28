import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const DeleteButton = () => {
  return <button className={cx("button")}>지우기</button>;
};

export default DeleteButton;
