"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useState, useEffect, useCallback } from "react";
import clock from "@/assets/Images/clock.svg";
import RImage from "@/common/RImage";
import { calculateTimeLeftUntilMidnight, formatTimeLeft } from "@/utils/timeCalculate";
import { TIMER_MESSAGE } from "@/constants/TimerMessage";

const cx = classNames.bind(styles);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeftUntilMidnight());

  const handleTimerUpdate = useCallback(() => {
    setTimeLeft(calculateTimeLeftUntilMidnight());
  }, []);

  useEffect(() => {
    const timerId = setInterval(handleTimerUpdate, 1000);
    return () => clearInterval(timerId);
  }, [handleTimerUpdate]);

  return (
    <div className={cx("container")}>
      <div className={cx("timer-container")}>
        <RImage src={clock} alt="timer" width="9rem" height="9rem" />
        <div className={cx("timer-wrapper")}>
          <h1 className={cx("time-title")}>남은 시간</h1>
          <time className={cx("timer")} suppressHydrationWarning>
            {formatTimeLeft(timeLeft)}
          </time>
        </div>
      </div>

      <div className={cx("text-wrapper")}>
        <p>{TIMER_MESSAGE.HURRY_UP.map((part) => part)}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
