import React from "react";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import plus from "../../../assets/Images/plus.svg";
import Image from "next/image";
import TodoLists from "../TodoLists";

const cx = classNames.bind(style);

const Schedule = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("todo")}>
        <div>시작 전</div>
        <Image src={plus} alt="plus" width={40} height={40} />
        <TodoLists />
      </div>
      <div className={cx("todo")}>
        <div>진행 중</div>
        <Image src={plus} alt="plus" width={40} height={40} />
      </div>
      <div className={cx("todo")}>
        <div>완료</div>
        <Image src={plus} alt="plus" width={40} height={40} />
      </div>
    </div>
  );
};

export default Schedule;
