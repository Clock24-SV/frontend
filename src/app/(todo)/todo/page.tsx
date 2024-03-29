import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Nav from "@/common/Nav";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx("main")}>
      <Nav />
    </main>
  );
};

export default Main;
