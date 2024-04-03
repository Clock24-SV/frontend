import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Nav from "@/common/Nav";
import TodoCalendar from "@/components/TodoCalendar";
import CountdownTimer from "@/components/CountdownTimer";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx("main")}>
      <Nav />
      <TodoCalendar />
      <CountdownTimer />
    </main>
  );
};

export default Main;
