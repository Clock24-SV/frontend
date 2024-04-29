import CustomText from "@/src/common/CustomText";
import { colors } from "@/src/constants/Colors";
import { calculateTimeLeft, formatTimeLeft } from "@/src/utils";
import styled, { css } from "@emotion/native";
import { useCallback, useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  const handleTimerUpdate = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timerId = setInterval(handleTimerUpdate, 1000);
    return () => clearInterval(timerId);
  }, [handleTimerUpdate]);

  return (
    <Container>
      <CustomText style={RestTime}>남은 시간</CustomText>
      <CustomText style={LeftTime}>{formatTimeLeft(timeLeft)}</CustomText>

      <MessageContainer>
        <CustomText style={Message}>
          {"서두르세요!! \n곧 시간이 종료되어 벌점이 부여됩니다."}
        </CustomText>
      </MessageContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 150px;
`;

const RestTime = css`
  font-size: 16px;
  color: ${colors.GARY};
`;

const LeftTime = css`
  font-size: 24px;
  color: ${colors.BLACK};
`;

const MessageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  min-height: 60px;

  margin-top: 10px;
  padding: 10px;

  border: 1px solid ${colors.LIGHT_GRAY};
  border-radius: 10px;
`;

const Message = css`
  font-size: 14px;
  color: ${colors.GARY};
  text-align: center;
`;
