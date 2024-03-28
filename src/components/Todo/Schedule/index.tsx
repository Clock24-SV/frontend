import React from "react";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import plus from "../../../assets/Images/plus.svg";
import Image from "next/image";
import TodoLists from "../TodoLists";
import TodoData from "../TodoLists/TodoData";
import ClearButton from "../TodoLists/ClearButton";
import DeleteButton from "../TodoLists/DeleteButton";

const cx = classNames.bind(style);

const Schedule = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("before")}>
        <div className={cx("situation")}>
          <div className={cx("before-text")}>시작 전</div>
          <Image
            className={cx("plus")}
            src={plus}
            alt="plus"
            width={40}
            height={40}
          />
        </div>
        <TodoLists>
          <TodoData />
          <DeleteButton />
        </TodoLists>
        <TodoLists>
          <TodoData />
          <DeleteButton />
        </TodoLists>
        <TodoLists>
          <TodoData />
          <DeleteButton />
        </TodoLists>
        <TodoLists>
          <TodoData />
          <DeleteButton />
        </TodoLists>
      </div>
      <div className={cx("proceed")}>
        <div className={cx("situation")}>
          <div className={cx("proceed-text")}>진행 중</div>
          <Image
            className={cx("plus")}
            src={plus}
            alt="plus"
            width={40}
            height={40}
          />
        </div>
        <TodoLists>
          <TodoData />
          <ClearButton />
          <DeleteButton />
        </TodoLists>
      </div>
      <div className={cx("completed")}>
        <div className={cx("situation")}>
          <div className={cx("completed-text")}>완료</div>
          <Image
            className={cx("plus")}
            src={plus}
            alt="plus"
            width={40}
            height={40}
          />
        </div>
        <TodoLists>
          <TodoData />
          <DeleteButton />
        </TodoLists>
      </div>
    </div>
  );
};

export default Schedule;
