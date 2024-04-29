import CustomText from "@/src/common/CustomText";
import { colors } from "@/src/constants/Colors";
import styled, { css } from "@emotion/native";
import React from "react";

export default function ProgressBar() {
  let progress = 80;

  return (
    <Container>
      <BarContainer>
        <BarFiller style={{ width: `${progress}%` }} />
        <LabelBox style={{ left: `${progress - 7}%` }}>
          <CustomText style={PercentageLabel}>{`${progress}%`}</CustomText>
        </LabelBox>
        <TrianglePointer style={{ left: `${progress - 3}%` }} />
      </BarContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-top: 20px;

  width: 100%;
  min-height: 80px;
`;

const BarContainer = styled.View`
  position: relative;

  width: 90%;
  height: 10px;

  border-radius: 5px;
  background-color: ${colors.LIGHT_GRAY};
`;

const BarFiller = styled.View`
  height: 100%;
  border-radius: 5px;
  background-color: ${colors.BLUE};
`;

const LabelBox = styled.View`
  position: absolute;
  bottom: -35px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${colors.LIGHT_BLUE};
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 16px;
  elevation: 1; // Android
`;

const PercentageLabel = css`
  color: ${colors.BLACK};
  font-weight: 500;
`;

const TrianglePointer = styled.View`
  position: absolute;
  bottom: -15px;
  background-color: transparent;
  border-style: solid;
  border-left-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 10px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${colors.LIGHT_BLUE};
`;
