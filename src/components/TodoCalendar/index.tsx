"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { useState } from "react";

const cx = classNames.bind(styles);

const TodoCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();

  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const handleDayClick = (day: Date) => setSelectedDay(day);

  return (
    <div>
      <div className={cx("calendar-wrapper")}>
        <DayPicker
          locale={ko}
          weekStartsOn={1} // 월요일부터 시작
          mode="single" // 한 날짜만 선택 가능
          required
          selected={selectedDay}
          onDayClick={handleDayClick}
          modifiers={{ today }}
          modifiersStyles={{ today: { border: "0.25rem solid #208BFF" } }}
          showOutsideDays
          captionLayout="dropdown-buttons"
          fromYear={year - 10}
          toYear={year + 10}
        />
      </div>
    </div>
  );
};

export default TodoCalendar;
