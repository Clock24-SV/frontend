import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import cloud from "../../../assets/Images/cloud.svg";
import noSun from "../../../assets/Images/noSun.svg";
import noRain from "../../../assets/Images/noRain.svg";

const cx = classNames.bind(styles);

const Day = () => {
  return (
    <div className={cx("wrapper")}>
      <h2>2월 14일</h2>
      <Image
        className={cx("weather")}
        src={cloud}
        alt="구름"
        width={30}
        height={30}
      />
      <Image
        className={cx("weather")}
        src={noSun}
        alt="햇빛"
        width={30}
        height={30}
      />
      <Image
        className={cx("weather")}
        src={noRain}
        alt="비"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Day;
