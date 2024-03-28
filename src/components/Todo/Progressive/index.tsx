import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import todoPercent from "../../../assets/Images/todoPercent.svg";
import Image from "next/image";

const cx = classNames.bind(styles);

const Progressive = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("pro-bar")}>
        <div className={cx("bar")} />
      </div>
      <div className={cx("todo-percent")}>
        <Image src={todoPercent} alt="percent" fill />
        <span>75%</span>
      </div>
    </div>
  );
};

export default Progressive;
