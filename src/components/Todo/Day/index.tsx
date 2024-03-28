import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import cloud from "../../../assets/Images/cloud.svg";
import noCloud from "../../../assets/Images/noCloud.svg";
import noSun from "../../../assets/Images/noSun.svg";
import sun from "../../../assets/Images/sun.svg";
import noRain from "../../../assets/Images/noRain.svg";
import rain from "../../../assets/Images/rain.svg";
import { useTodo } from "..";

const cx = classNames.bind(styles);

const Day = () => {
  const { weather, handleWeatherClick } = useTodo();

  return (
    <div className={cx("wrapper")}>
      <h2>2월 14일</h2>
      <Image
        onClick={handleWeatherClick}
        className={cx("weather")}
        src={weather === "CLOUD" ? cloud : noCloud}
        alt="구름"
        width={30}
        height={30}
      />
      <Image
        onClick={handleWeatherClick}
        className={cx("weather")}
        src={weather === "SUN" ? sun : noSun}
        alt="햇빛"
        width={30}
        height={30}
      />
      <Image
        onClick={handleWeatherClick}
        className={cx("weather")}
        src={weather === "RAIN" ? rain : noRain}
        alt="비"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Day;
