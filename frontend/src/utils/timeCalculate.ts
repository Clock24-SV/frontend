import { addDays, startOfDay, differenceInSeconds } from "date-fns";

// 오늘 날짜부터 내일 자정까지 남은 시간을 초 단위로 계산
export const calculateTimeLeftUntilMidnight = () => {
  const now = new Date();
  const tomorrow = addDays(now, 1);
  const midnight = startOfDay(tomorrow);
  return differenceInSeconds(midnight, now);
};

export const formatTimeLeft = (secondsLeft: number) => {
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  // 'padStart'를 사용하여 각 단위에 최소 두 자리 숫자가 있는지 확인
  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${paddedHours}시 ${paddedMinutes}분 ${paddedSeconds}초`;
};
