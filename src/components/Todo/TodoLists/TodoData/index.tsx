import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TodoData = () => {
  return <div className={cx("todoData")}>밥 먹기</div>;
};

export default TodoData;
